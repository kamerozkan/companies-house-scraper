// Run companies-house-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "sicCodes": [
    "62012"
  ],
  "location": "London",
  "incorporatedWithinDays": 30,
  "companyStatus": [
    "active"
  ],
  "maxItems": 50
};
const run = await client.actor('kamerozkan/companies-house-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
