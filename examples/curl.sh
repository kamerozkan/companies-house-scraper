#!/usr/bin/env bash
# Run companies-house-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~companies-house-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"sicCodes": ["62012"], "location": "London", "incorporatedWithinDays": 30, "companyStatus": ["active"], "maxItems": 50}'
