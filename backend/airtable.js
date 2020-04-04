const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyRPtrDfbRcbRCPA'
});
const base = Airtable.base('appW04rbe6P6gP5wR');

console.log("loaded airtable");

const airtableMiddleware = (app) => {

  app.get('/solutions', (req, res, next) => {
    let accumulator = [];
    base('Solutions').select({
        maxRecords: 3,
        view: "All Solutions",
        fields: ["Name", "Summary","Featured","Link","Media","Type","Challenges addressed","Stage"],
        // filterByFormula: "({Featured} = true)",
        pageSize: 100,
        sort: [{field: "Featured", direction: "desc"},{field: "Name", direction: "asc"},]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
          console.log('Retrieved', record.get('Name'));
          accumulator.push(record._rawJson);
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
        return res.status(200).json({
          records: accumulator
        });
    });
  });

}

exports.airtableMiddleware = airtableMiddleware;

