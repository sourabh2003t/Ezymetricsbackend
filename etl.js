// etl.js
const axios = require('axios');
const { Lead, Campaign } = require('./db');

async function fetchAndStoreData() {
    const leadsResponse = await axios.get('http://localhost:3000/api/leads');
    const campaignsResponse = await axios.get('http://localhost:3000/api/campaigns');

    await Lead.deleteMany({});
    await Campaign.deleteMany({});

    await Lead.insertMany(leadsResponse.data);
    await Campaign.insertMany(campaignsResponse.data);

    console.log('Data has been successfully fetched and stored!');
}

fetchAndStoreData();
