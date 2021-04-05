  /* form functionality */

function sendMail(){
    if(document.getElementById("contact-form").checkValidity()){
        event.preventDefault();
    console.log("from send mail func");
    var tempParams = {
        Name: document.getElementById("Name").value,
        Phone: document.getElementById("Phone").value,
        Email: document.getElementById("Email").value,
        OtherName: document.getElementById("OtherName").value,
        OtherPhone: document.getElementById("OtherPhone").value,
        Subject: document.getElementById("Subject").value,
        ClassSchool: document.getElementById("ClassSchool").value,
        Message: document.getElementById("Message").value
    };
    emailjs.send('service_wwrp9hk', 'template_or7i0i9', tempParams)
    .then(function(res){
    console.log("success", res.status);
    document.getElementById("contact-form").reset();
    });
}
}

