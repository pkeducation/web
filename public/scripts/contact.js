  /* form functionality */

function sendMail(){
    event.preventDefault();
    console.log("from send mail func");
    var tempParams = {
        studentName: document.getElementById("FName").value,
        studentPhone: document.getElementById("SPhone").value,
        sutdentEmail: document.getElementById("SEmail").value,
        parentName: document.getElementById("PName").value,
        parentPhone: document.getElementById("PPhone").value,
        Subject: document.getElementById("SSubject").value,
        Message: document.getElementById("Message").value
    };
     emailjs.send('service_wwrp9hk', 'template_or7i0i9', tempParams)
    .then(function(res){
        console.log("success", res.status);
        document.getElementById("contact-form").reset();
    });
}

