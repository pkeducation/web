const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const mailchimp = require("@mailchimp/mailchimp_marketing");




mailchimp.setConfig({
     apiKey: "c45c4d11c47d6143ef3495231fde6998-us1",
     server: "us1"
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
        res.sendFile(__dirname + "/success.html");
        console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
    }

    run().catch(e => res.sendFile(__dirname + "/failure.html"));

});


app.listen(process.env.PORT ||3000, function(){
    console.log("newsletter app started");
});

//API Key: c45c4d11c47d6143ef3495231fde6998-us1
//API Key: c45c4d11c47d6143ef3495231fde6998-us1
//audience/list id: c2935e5e99