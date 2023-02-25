function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\([0-9][0-9][0-9]\)-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/; 
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#numberAnswer").on("change", function(){
        if (!validatePhone("numberAnswer")){
            alert("Wrong format for phone. Ensure it's in the format of (xxx)-xxx-xxxx");
            $("#numberAnswer").val("(xxx)-xxx-xxxx");
            $("#numberAnswer").addClass("error");
        }
        else {
            $("#numberAnswer").removeClass("error");
        }
    });

});
