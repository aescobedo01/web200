function returnText() {
    var age = parseFloat(document.getElementById("ageInput").value);
    var dropdown = document.getElementById("dropdownHere");

    const calculateMonths = age * 12;
    const calculateDays = age * 365;
    const calculateHours = age * 365 * 24;
    const calculateSeconds = age * 365 * 24 * 3600;

    if (dropdown.value === 'months') {
        document.getElementById("result").innerHTML = 'You are ' + calculateMonths + ' months old.';
    } else if (dropdown.value === 'days') {
        document.getElementById("result").innerHTML = 'You are ' + calculateDays + ' days old.';
    } else if (dropdown.value === 'hours') {
        document.getElementById("result").innerHTML = 'You are ' + calculateHours + ' hours old.';
    } else{
        document.getElementById("result").innerHTML = 'You are ' + calculateSeconds + ' seconds old.';
    }

}