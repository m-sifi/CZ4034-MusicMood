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

SPELLCHECK_BODY = {
    "update-searchcomponent": {
        "name": "spellcheck",
        "class": "solr.SpellCheckComponent",
        "name": "spellcheck",
    "class": "solr.SpellCheckComponent",
        "spellchecker": {
        "name": "default",
        "field": "lyrics",
        "classname": "solr.DirectSolrSpellChecker",
        "distanceMeasure": "internal",
        "accuracy": 0.5,
        "maxQueryFrequency": 0.01,
        "maxEdits": 2,
        "minPrefix": 1,
        "maxInspections": 5,
        "minQueryLength": 4
        },

    }
}