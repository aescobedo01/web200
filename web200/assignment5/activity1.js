function returnText() {
    let hours = parseFloat(document.getElementById("hoursInput").value);
    let wage = parseFloat(document.getElementById("wageInput").value);
    let gross = hours * wage;
    let grossovertime = gross * 1.5;

        if (hours <= 40) {
        document.getElementById("resultgross").innerHTML = "Your weekly gross pay is $" + gross + ".";
    }
        if (hours >= 40) {
        document.getElementById("resultgrossovertime").innerHTML = "Your weekly gross overtime pay is $" + grossovertime + ".";
    }

    // window.alert(["Your weekly gross pay is " + calculateWeekly + " and your overtime gross pay is " + "."]);
}