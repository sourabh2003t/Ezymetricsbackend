const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Dummy API to simulate fetching leads
app.get('/api/leads', (req, res) => {
    const dummyLeads = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ];
    res.json(dummyLeads);
});

// Dummy API to simulate fetching campaign data
app.get('/api/campaigns', (req, res) => {
    const dummyCampaigns = [
        { id: 1, title: 'Spring Sale', budget: 1000 },
        { id: 2, title: 'Summer Campaign', budget: 2000 },
    ];
    res.json(dummyCampaigns);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
