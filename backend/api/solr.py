from constants import HOST_URL, MUSIC_SCHEMA, FLOAT_COLS, BATCH_SIZE, COLLECTION_NAME
import requests

def update_document(docs):
    url = HOST_URL + f"api/collections/{COLLECTION_NAME}/update/json?commit=true"
    response = requests.post(url, json=docs)

    print(response.content)

    if response.status_code == 200:
        print(f"Successfully added {len(docs)} rows.")
    else:
        print(f"Error adding rows: {response.status_code} - {response.text}")

    return docs
    