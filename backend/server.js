const express = require('express'),
      http = require('http'),
      app = express(),
      port = 8080,
      server = http.createServer(app),
      airtable = require("./airtable.js");

airtable.airtableMiddleware(app);

app.get("/test", function(res) {
  console.log("api request");
  res.send("API is working properly");
});

server.listen(port, () => console.log(`Listening on port ${port}`));
