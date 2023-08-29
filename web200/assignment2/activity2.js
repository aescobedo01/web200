function convertAge(years) {
    const monthsPerYear = 12;
    const daysPerYear = 365;
    const hoursPerDay = 24;
    const secondsPerHour = 60 * 60;

    const months = years * monthsPerYear;
    const days = years * daysPerYear;
    const hours = days * hoursPerDay;
    const seconds = hours * secondsPerHour;

return {
    months: months,
    days: days,
    hours: hours,
    seconds: seconds,
};
}

const years = prompt("Enter age here:");

const age = convertAge(years);

console.log("Your age in months is:", age.months);
console.log("Your age in days is:", age.days);
console.log("Your age in hours is:", age.hours);
console.log("Your age in seconds is:", age.seconds);
