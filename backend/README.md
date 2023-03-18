# CZ 4034 - Information Retrieval

## Introduction

This repo contains the backend of the CZ 4034 project. There are 3 folders:

- `scripts`: Python scripts to interact with Solr's REST APIs
- `solr-9.1.1`: Binary of Solr's latest release (9.1.1)
- `assets`: CSV music data resulting from web-crawling

## Actions

### Starting the Solr server

```
cd solr-9.1.1
bin/solr start
```

### Stopping the Solr server

```
cd solr-9.1.1
bin/solr stop
```
