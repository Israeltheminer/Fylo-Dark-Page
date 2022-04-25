$("#bottom_button").click(function(){
   if($("#email_input").is(":valid")===false){
      $(".bottom_error").removeClass("hidden");
   }
})