
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const app = express();
const about_us = require(__dirname + "/public/scripts/about_us.js")

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

 app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.get("/contact", function(req, res){
  res.sendFile(__dirname + "/public/html/contact.html");
});

app.get("/about_us", function(req, res){
  res.sendFile(__dirname + "/public/html/about_us.html");
});

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us1"
 });

 app.get("/about_us", function(req, res){
  about_us.check_subscribe();
 });

app.post("/about_us", function(req, res){
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const listId = "c2935e5e99";

  const subscribingUser = {
      firstName: firstName,
      lastName: lastName, 
      email: email
  };

  async function run(){
      const response = await mailchimp.lists.addListMember(listId, {
          email_address: subscribingUser.email,
          status: "subscribed",
          merge_fields: {
              FNAME: subscribingUser.firstName,
              LNAME: subscribingUser.lastName
          }
      });
      //res.send("<h1> Successfully subscribed </h1>");
      //() => $(".modal-title").text("Congratulations!! You've successfully subscribed")
      about_us.success_modal();
      console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
  }

  //run().catch(e => res.send("<h1>Could not subscribe, please contat admin</h1>"));
  run().catch(e => about_us.success_modal());
});

app.listen(process.env.PORT ||3000, function(){
  console.log("pk education app started");
});