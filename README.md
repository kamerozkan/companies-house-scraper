# Companies House Scraper - UK Company Data & New Companies

Scrape UK Companies House company data without an API key. Filter by SIC code, incorporation date, location, status and type, get new company leads, registered office addresses and SIC codes as JSON, CSV or Excel.

**[Run it on Apify Store](https://apify.com/kamerozkan/companies-house-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/companies-house-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/companies-house-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/companies-house-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "sicCodes": [
    "62012"
  ],
  "location": "London",
  "incorporatedWithinDays": 30,
  "companyStatus": [
    "active"
  ],
  "maxItems": 50
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "companyNumber": "17455251",
    "companyName": "2OUMWRAPS LTD",
    "companyStatus": "active",
    "companyType": "ltd",
    "companyTypeLabel": "Private limited company",
    "companySubtype": null,
    "incorporationDate": "2026-09-12",
    "dissolutionDate": null,
    "sicCodes": [
      "56102"
    ],
    "registeredOfficeAddress": "50 Ashley Court Grand Avenue Hove England BN3 2NN",
    "postcode": "BN3 2NN",
    "url": "https://find-and-update.company-information.service.gov.uk/company/17455251",
    "companyStatusText": "Active",
    "sicDescriptions": [
      "56102 - Unlicensed restaurants and cafes"
    ],
    "nextAccountsMadeUpTo": "2027-09-30",
    "nextAccountsDueBy": "2028-06-12",
    "accountsOverdue": false,
    "nextConfirmationStatementDate": "2027-09-11",
    "nextConfirmationStatementDueBy": "2027-09-25",
    "confirmationStatementOverdue": false,
    "previousNames": [],
    "searchQuery": "SIC 56101, 56102 | incorporated 2026-09-12 to 2026-10-12 | status active",
    "scrapedAt": "2026-10-12T17:45:19+00:00"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/companies-house-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
