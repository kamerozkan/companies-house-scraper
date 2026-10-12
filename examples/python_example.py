"""Run companies-house-scraper on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'sicCodes': ['62012'],
 'location': 'London',
 'incorporatedWithinDays': 30,
 'companyStatus': ['active'],
 'maxItems': 50}
run = client.actor("kamerozkan/companies-house-scraper").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
