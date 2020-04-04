const express = require('express'),
      http = require('http'),
      cors = require('cors'),
      helmet = require('helmet'),
      app = express(),
      port = 9060,
      server = http.createServer(app),
      airtable = require("./airtable.js");

app.use(helmet());
app.use(cors());

airtable.airtableMiddleware(app);

app.get("/test", function(res) {
  console.log("api request");
  res.send("API is working properly");
});

server.listen(port, () => console.log(`Listening on port ${port}`));
