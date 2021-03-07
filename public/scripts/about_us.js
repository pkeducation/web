//jsjint esversion:6
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);

    function check_subscribe() {
        $("#submit-button").click(function() {
            if($(".top").val() !="" && $(".middle").val() !=""  && $(".bottom").val() !="") {
              $('#signup').modal('show');
              $(this).closest("form").submit(); 
            }
        });
     }

    module.exports = {
      failure_modal, success_modal, check_subscribe
    }

     function success_modal(){
      $(".modal-title").text("Congratulations!! You've successfully subscribed")
      return
     }

     function failure_modal(){

      return;
     }

     check_subscribe();