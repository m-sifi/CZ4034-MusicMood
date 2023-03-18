import requests
from constants import HOST_URL

# example query: lyrics that contain "happy", limited to return 10 rows

params = {
    "q": "lyrics:happy",
    "rows": 10,
}

response = requests.get(f"{HOST_URL}solr/music/select", params=params)
documents = response.json()["response"]["docs"]
for document in documents:
    print(document)