document.addEventListener("DOMContentLoaded", function returnText() {
    var date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1; // JavaScript months are 0-11
    let day = date.getDate();

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    document.getElementById("result").innerHTML =
    'Year: ' + year + "<br />" + 
    'Month: ' + month + "<br />" +
    'Day: ' + day + "<br />" +
    'Hours: ' + hours + "<br />" +
    'Minutes: ' + minutes + "<br />" +
    'Seconds: ' + seconds;

    setInterval(returnText, 1000);
});
