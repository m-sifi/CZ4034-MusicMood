#!/bin/bash

function usage {
    echo "Usage: $0 [-s]"
    echo "  -s  Stop the backend services"
    exit 1
}

while getopts "s" opt; do
    case ${opt} in
        s )
            cd solr-9.1.1 
            bin/solr stop
            exit 0
            ;;
        \? )
            usage
            ;;
    esac
done

# Start Solr API
cd solr-9.1.1 
bin/solr start -c 

# Start FastAPI wrapper
cd ..
cd api
uvicorn main:app --reload