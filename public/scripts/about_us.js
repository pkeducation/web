
    $(function() {
        $("#submit-button").click(function() {
            if($(".top").val() !="" && $(".middle").val() !=""  && $(".bottom").val() !="") {
              $('#signup').modal('show');
              $(this).closest("form").submit(); 
            }
        });
     });

//API Key: c45c4d11c47d6143ef3495231fde6998-us1
//API Key: c45c4d11c47d6143ef3495231fde6998-us1
//audience/list id: c2935e5e99