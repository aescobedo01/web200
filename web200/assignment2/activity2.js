function returnText() {
    var age = parseFloat(document.getElementById("ageInput").value);

    const monthsPerYear = 12;
    const daysPerYear = 365;
    const hoursPerDay = 24;
    const secondsPerHour = 3600;

    const calculateMonths = age * monthsPerYear;
    const calculateDays = age * daysPerYear;
    const calculateHours = age * daysPerYear * hoursPerDay;
    const calculateSeconds = age * hoursPerDay * secondsPerHour;

    window.alert(["Your age in months is " + calculateMonths + " months, your age in days is " + calculateDays + " days, your age in hours is " + calculateHours + " hours, and your age in seconds is " + calculateSeconds + " seconds."]);
}

/*unsure how to add the result in the console log

var age = returnText();

console.log("Your age in months is:", age.calculateMonths);
console.log("Your age in days is:", age.calculateDays);
console.log("Your age in hours is:", age.calculateHours);
console.log("Your age in seconds is:", age.calculateSeconds);
*/