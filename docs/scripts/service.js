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

    $("#ccnum-answer").on("change",function(){
        var regEx = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
        var visa = /^4[0-9]{12}(?:[0-9]{3})?$/
        var amex = /^3[47][0-9]{13}$/
        
        if(document.getElementById("ccnum-answer").value.match(regEx) || document.getElementById("ccnum-answer").value.match(visa) || document.getElementById("ccnum-answer").value.match(amex)){
            return true;
        }
        else{
            alert("Please enter a valid credit card number.");
            return false;
        }
});   

    $( "#datepicker" ).datepicker(
           {
               beforeShowDay: function(d){
                   var day = d.getDay();
                   if((!document.getElementById("person1").checked && !document.getElementById("person2").checked && !document.getElementById("person3").checked) || document.getElementById("none").checked){
                       return [(day == 0 || day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6 || day == 7), ''];
                   }    
                    else{
                        if(document.getElementById("person1").checked){
                            return [(day != 0), ''];
                        }
                        if(document.getElementById("person2").checked){
                            return [(day != 4), ''];
                        }
                        if(document.getElementById("person3").checked){
                            return [(day != 6), ''];
                        }
                    }
                }    
            })
    });
