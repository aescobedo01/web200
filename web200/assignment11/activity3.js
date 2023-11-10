/*
Create JavaScript code to display the current window size, screen size,
 and location information. Use the resize event to update the display 
 whenever the window size changes.
 */
window.onload = function () {
    document.getElementById("myBtn").addEventListener("click", myFunction);
}

function myFunction() { 

    //current window n screen size
    let win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight || docElem.clientHeight || body.clientHeight;


    document.getElementById("result").innerHTML = x + ' x ' + y;

    //location
     
    const locate = document.getElementById("result2");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        locate.innerHTML = "Geolocation is not supported by this browser.";
    }

    function showPosition(position) {
        locate.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    }

}

//show browser window resizing in real time

window.onresize = myFunction;



