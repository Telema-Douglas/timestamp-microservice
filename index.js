// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const { response } = require('express');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'Hello API'});
});


errorResponse = (res, code, message) => {
  return res.status(code).json({error:message})
}

successResponse = (res, data) => {
  return res.status(200).json(data);
}

getUNIXDate = (date) => {
  return date.getTime() / 1000;
}

getUTCDate = (date) => {
  return date.toUTCString();
}

const INVALID_DATE = "Invalid Date";

app.get("/api/:date", function(req,res){

    let inputString = req.params.date;
   
    let date;
   
    if(isNaN(inputString)){
      date = new Date (inputString);
    }else{
      date = new Date(Number(inputString));
    }
    
   
    if(date == INVALID_DATE){
      this.errorResponse(res, 400, INVALID_DATE);
    }else{
      return this.successResponse(res, {unix:Number(this.getUNIXDate(date)), utc:this.getUTCDate(date)});
    }

})


// listen for requests :)
var listener = app.listen(3001, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
