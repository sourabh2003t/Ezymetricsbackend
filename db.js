// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ezyMetrics', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const LeadSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const CampaignSchema = new mongoose.Schema({
    title: String,
    budget: Number,
});

const Lead = mongoose.model('Lead', LeadSchema);
const Campaign = mongoose.model('Campaign', CampaignSchema);

module.exports = { Lead, Campaign };
