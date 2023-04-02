---
tags: 
- autonlp
language: en
widget:
- text: "I love AutoNLP 🤗"
datasets:
- juliensimon/autonlp-data-song-lyrics
co2_eq_emissions: 112.75546781635975
---

# Model Trained Using AutoNLP

- Problem type: Multi-class Classification
- Model ID: 18753417
- CO2 Emissions (in grams): 112.75546781635975

## Validation Metrics

- Loss: 0.9065971970558167
- Accuracy: 0.6680274633512711
- Macro F1: 0.5384854358272774
- Micro F1: 0.6680274633512711
- Weighted F1: 0.6414749238882866
- Macro Precision: 0.6744495173269196
- Micro Precision: 0.6680274633512711
- Weighted Precision: 0.6634090047492259
- Macro Recall: 0.5078466493896978
- Micro Recall: 0.6680274633512711
- Weighted Recall: 0.6680274633512711


## Usage

You can use cURL to access this model:

```
$ curl -X POST -H "Authorization: Bearer YOUR_API_KEY" -H "Content-Type: application/json" -d '{"inputs": "I love AutoNLP"}' https://api-inference.huggingface.co/models/juliensimon/autonlp-song-lyrics-18753417
```

Or Python API:

```
from transformers import AutoModelForSequenceClassification, AutoTokenizer

model = AutoModelForSequenceClassification.from_pretrained("juliensimon/autonlp-song-lyrics-18753417", use_auth_token=True)

tokenizer = AutoTokenizer.from_pretrained("juliensimon/autonlp-song-lyrics-18753417", use_auth_token=True)

inputs = tokenizer("I love AutoNLP", return_tensors="pt")

outputs = model(**inputs)
```