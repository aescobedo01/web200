/*
    Use JavaScript to validate data entry. 
    Disable the Submit button by default, and only enable 
    it when all data passes validation. Include appropriate 
    error messages to inform the user of any necessary corrections. 
    Help the user enter data matching appropriate patterns for 
    phone number and date of birth based on your locale.


    

TESTING



window.onload = function () {
    
    let inputs = document.forms["form"].elements;

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", returnText);
    }
}

*/

  
function returnText() {
    let f = document.forms["form"].elements;
    let cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        if (f[i].value.length == 0) cansubmit = false;
    }

    if (cansubmit) {
        document.getElementById('myBtn').disabled = false;
    }
}