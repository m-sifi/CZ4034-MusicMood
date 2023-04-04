from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import torch
from transformers import AutoModelForSequenceClassification, AutoTokenizer
from torch.nn import functional as F
import pandas as pd

import requests
import openai
import tempfile

from solr import update_document

SONG_DATAFRAME = pd.read_csv("../assets/spotify_songs.csv")

OPENAI_API_KEY = ""
MODEL_ID = "whisper-1"

CLASSIFICATION_MODEL_NAME = "juliensimon-autonlp-song-lyrics"

model = AutoModelForSequenceClassification.from_pretrained(f"../models/{CLASSIFICATION_MODEL_NAME}/")
tokenizer = AutoTokenizer.from_pretrained(f"../models/{CLASSIFICATION_MODEL_NAME}/")

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/lyrics")
def get_lyrics(id:str):
    df = SONG_DATAFRAME
    lyrics = df.loc[df['id'] == id, 'lyrics'].iloc[0]

    return { "lyrics": lyrics }
    

@app.get("/mood")
def get_mood(q:str):
    inputs = tokenizer(q, return_tensors="pt")
    outputs = model(**inputs)
    label_ids = torch.argmax( outputs.logits,dim=1 )
    labels = [model.config.id2label[label_id] for label_id in  label_ids.tolist()]

    return {"mood": labels[0]}

# simple wrapper hitting solrs query endpoint
@app.get("/search")
def search(q: str, rows: int, start: int):
    res = requests.get("http://localhost:8983/solr/music/select",
                       params={"q": q, "rows": rows, "start": start})
    
    classification = get_mood(q)
    res = res.json()

    for song in res["response"]["docs"]:
        song["_version_"] = 0
        song["mood"] = {"set": classification["mood"]}

    update_document(res["response"]["docs"])

    for song in res["response"]["docs"]:
        song["_version_"] = 0
        song["mood"] = classification["mood"]

    return res["response"]

# simple wrapper hitting solrs query endpoint
@app.get("/mood/list")
def search(q: str, rows: int, start: int):
    res = requests.get("http://localhost:8983/solr/music/select",
                       params={"q": f"mood:{q}", "rows": rows, "start": start})
    
    res = res.json()

    for song in res["response"]["docs"]:
        mood = song["mood"][0]
        song["mood"] = mood

    return res["response"]

# endpoint that takes in audio (mp3) and uses OpenAI Whisper to return the embedded text
@app.post("/uploadAudio")
async def uploadAudio(audio: UploadFile = File(...)):
    audio_bytes = await audio.read()
    with tempfile.NamedTemporaryFile(suffix=".mp3") as tmp:
        tmp.write(audio_bytes)
        openai.api_key = OPENAI_API_KEY
        result = openai.Audio.transcribe(
            model=MODEL_ID,
            file=open(tmp.name, "rb"),
        )
        print(result["text"])
        return {"text": result["text"]}
    

