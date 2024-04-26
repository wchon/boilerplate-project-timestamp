// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get("/api/:date?", (req, res) => {
  let date = req.params.date;
  
  let isDateEmpty = (date == null || date == "");

  let isDateValid = Date.parse(date);

  let isUnixNumberVaild = /^[0-9]+$/.test(date);

  let unixOutput = 0;
  let utcOutput = "";

  if (isDateValid) {
    unixOutput = new Date(date);
    utcOutput = unixOutput.toUTCString();
    return res.json({unix: unixOutput.valueOf(), utc: utcOutput});
  }
  else if (isNaN(isValidDate) && isUnixNumberVaild) {
    unixOutput = new Date (parseInt(date));
    utcOutput = unixOutput.toUTCString();
    return res.json({unix: unixOutput.valueOf(), utc: utcOutput});
  }
  else if (isDateEmpty) {
    unixOutput = new Date();
    utcOutput = unixOutput.toUTCString();
    return res.json({unix: unixOutput.valueOf(), utc: utcOutput});
  }
  else {
    return res.json({error: "Invalid Date"});
  }
})
