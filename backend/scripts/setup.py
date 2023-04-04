import requests
import json
from typing import List, Dict, Any
import csv
import re

from constants import HOST_URL, MUSIC_SCHEMA, FLOAT_COLS, BATCH_SIZE, SPELLCHECK_BODY


"""
create_collection: creates a Solr collection

Args:
    collection_name (str): name of collection
"""
def create_collection(collection_name: str) -> None:
    url = HOST_URL + "api/collections"

    try:
        body = {
            "create": {
                "name": collection_name,
                "numShards": 1,
                "replicationFactor": 1
            }
        }
        response = requests.post(
            url, 
            json=body, 
            headers={'Content-type': 'application/json'}
        )
        response.raise_for_status()
        print("Document added successfully.")
    except requests.exceptions.HTTPError as err:
        print("HTTP error:", err)
    except requests.exceptions.RequestException as err:
        print("Error adding document:", err)


"""
define_schema: creates schema for a given collection

Args:
    collection_name (str): name of collection
    schema (List[Dict[str, Any]]): schema according to Solr guidelines
"""
def define_schema(collection_name: str, schema: List[Dict[str, Any]]) -> None:
    url = HOST_URL + f"api/collections/{collection_name}/schema"

    for field in schema:
        try:
            body = {
                "add-field": field,
            }
            response = requests.post(
                url, 
                json=body, 
                headers={'Content-type': 'application/json'}
            )
            response.raise_for_status()
            print(f"{field} added successfully.")
        except requests.exceptions.HTTPError as err:
            print("HTTP error:", err)
        except requests.exceptions.RequestException as err:
            print(f"Error adding field {field}:", err)


"""
clean_row: little bit of pre-processing

Args:
    row (Dict[str, str]): row from the CSV in JSON format
Return:
    row (Dict[str, Any]): row after cleaning
"""
def clean_row(row: Dict[str, str]) -> Dict[str, Any]:
    del row[""]
    del row["Unnamed: 0"]

    for col in FLOAT_COLS:
        row[col] = float(row[col])
    
    # convert "explicit" col to its boolean value
    row["explicit"] = row["explicit"] == "True"

    # remove \n and extra spaces from lyrics
    row["lyrics"] = row["lyrics"].replace("\n", " ")
    row["lyrics"] = re.sub('\s+', ' ', row["lyrics"]).strip()

    return row


"""
add_data: adds our songs to the collection

Args:
    collection_name (str): name of collection
"""
def add_data(collection_name: str) -> None:
    url = HOST_URL + f"api/collections/{collection_name}/update?commit=true"
    data = []

    with open("../assets/spotify_songs.csv", encoding="utf-8") as csvf:
        csvReader = csv.DictReader(csvf)
        for row in csvReader:
            row = clean_row(row)
            data.append(row)
    
    for i in range(0, len(data), BATCH_SIZE):
        batch = data[i:i+BATCH_SIZE]

        response = requests.post(url, json=batch)

        if response.status_code == 200:
            print(f"Successfully added {len(batch)} rows.")
        else:
            print(f"Error adding rows: {response.status_code} - {response.text}")
            

"""
spellcheck: adds spellcheck to our configuration

Args:
    collection_name (str): name of collection
"""
def spellcheck(collection_name):
    body = SPELLCHECK_BODY
    url = HOST_URL + f"solr/{collection_name}/config"
    response = requests.post(url, data=json.dumps(body))
    if response.status_code == 200:
        print(f"Successfully added spellcheck")
    else:
        print(f"Error adding spellcheck: status code {response.status_code}")
        print(response.content)

# create_collection("music")
# define_schema("music", MUSIC_SCHEMA)
# add_data("music")
spellcheck("music")

