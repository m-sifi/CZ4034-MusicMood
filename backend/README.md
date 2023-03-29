# CZ 4034 - Information Retrieval

## Introduction

This repo contains the backend of the CZ 4034 project. There are 4 folders:

- `scripts`: Python scripts to interact with Solr's REST APIs
- `solr-9.1.1`: Binary of Solr's latest release (9.1.1)
- `assets`: CSV music data resulting from web-crawling
- `api`: wrapper API (FastAPI) on top of Solr's API that allows us to create some personalized requests

## Actions

First, make sure that execution permissions on `run.sh` are active.

```
chmod +x run.sh
```

The following commands start up the wrapper API as well as Solr cloud.

### Starting (from `backend` directory)

```
./run.sh
```

### Stopping

```
./run.sh -s
```
