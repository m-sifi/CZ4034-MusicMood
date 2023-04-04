HOST_URL = "http://localhost:8983/"

MUSIC_SCHEMA = [
    {"name": "acousticness", "type": "pfloat"},
    {"name": "danceability", "type": "pfloat"},
    {"name": "energy", "type": "pfloat"},
    {"name": "instrumentalness", "type": "pfloat"},
    {"name": "valence", "type": "pfloat"},
    {"name": "title", "type": "text_general"},
    {"name": "artist", "type": "text_general"},
    {"name": "lyrics", "type": "text_general"},
    {"name": "images", "type": "string"},
    {"name": "genres", "type": "string", "multiValued": True},
    {"name": "explicit", "type": "boolean"},
    {"name": "popularity", "type": "pfloat"},
]

FLOAT_COLS = ["acousticness", "danceability", "energy", "instrumentalness", "valence", "popularity"]

BATCH_SIZE = 100

COLLECTION_NAME = "music"