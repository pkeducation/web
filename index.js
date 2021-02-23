
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");



const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

 app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.listen(process.env.PORT ||3000, function(){
  console.log("pk education app started");
});