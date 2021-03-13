  /* form functionality */

function sendMail(){
    event.preventDefault();
    console.log("from send mail func");
    var tempParams = {
        name: document.getElementById("FName").value,
        last_name: document.getElementById("LName").value,
        email: document.getElementById("SEmail").value
    };

    console.log("created tempParams");
    emailjs.send('service_wwrp9hk', 'template_or7i0i9', tempParams)
    .then(function(res){
        console.log("success", res.status);
    });
}

