const createCsvWriter = require('csv-writer').createObjectCsvWriter;

app.get('/api/report/csv', async (req, res) => {
    const leads = await Lead.find();
    const csvWriter = createCsvWriter({
        path: 'leads_report.csv',
        header: [
            { id: 'name', title: 'Name' },
            { id: 'email', title: 'Email' },
        ],
    });

    csvWriter.writeRecords(leads).then(() => {
        res.download('leads_report.csv');
    });
});
