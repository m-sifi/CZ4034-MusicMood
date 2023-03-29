from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import requests
import openai
import tempfile

API_KEY = ""
MODEL_ID = "whisper-1"

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# simple wrapper hitting solrs query endpoint
@app.get("/search")
def search(q: str, rows: int):
    res = requests.get("http://localhost:8983/solr/music/select",
                       params={"q": q, "rows": rows})
    return res.json()

# endpoint that takes in audio (mp3) and uses OpenAI Whisper to return the embedded text
@app.post("/uploadAudio")
async def uploadAudio(audio: UploadFile = File(...)):
    audio_bytes = await audio.read()
    with tempfile.NamedTemporaryFile(suffix=".mp3") as tmp:
        tmp.write(audio_bytes)
        openai.api_key = API_KEY
        result = openai.Audio.transcribe(
            model=MODEL_ID,
            file=open(tmp.name, "rb"),
        )
        print(result["text"])
        return {"text": result["text"]}
    