function myFunction() {
    var data = {
        fname: document.getElementById('firstName').value,
        lname: document.getElementById('lastName').value,
        birthday: document.getElementById('birthDay').value,
        address: document.getElementById('userAddress').value,
        city: document.getElementById('userCity').value,
        state: document.getElementById('stateList').value,
        zipcode: document.getElementById('zipCode').value,
        email: document.getElementById('eMail').value,
        phonenumber: document.getElementById('phoneNumber').value,

    };

    data.value1 = "Hey there";
    data.value2 = "world";

    $.ajax({
        url: "http://someurlhere/morethings/idontknow",
        type: "POST",
        dataType: "json", 
        data: JSON.stringify(data),
        contentType: "application/JSON; charset=utf-8;",
        success: function (data) {
            //my code in success here
            alert("success");
        }
    });
}