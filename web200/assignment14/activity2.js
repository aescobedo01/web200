

let btn = document.getElementById("myBtn");

btn.addEventListener("click", function(event) {
    event.preventDefault(); //prevent form submission

    let formData = {
        fname: document.getElementById("firstName").value,
        lname: document.getElementById("lastName").value,
        birthday: document.getElementById("birthDay").value,
        address: document.getElementById("userAddress").value,
        city: document.getElementById("userCity").value,
        state: document.getElementById("stateList").value,
        zipcode: document.getElementById("zipCode").value,
        email: document.getElementById("eMail").value,
    };

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://my-json-server.typicode.com/typicode/demo", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onload = function() {
        if (xhttp.status == 201) {
            console.log(JSON.parse(xhttp.responseText));
        }
    };
    xhttp.send(JSON.stringify(formData)); 

    const xhttpGet = new XMLHttpRequest();
    xhttpGet.open("GET", "https://my-json-server.typicode.com/typicode/demo", true);
    xhttpGet.onload = function() {
        if (xhttpGet.status == 200) {
            console.log(JSON.parse(xhttpGet.responseText));
        }
    };
    xhttpGet.send();
});