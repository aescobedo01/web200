window.onload = function() {
    document.getElementById("myBtn").addEventListener("click", returnText);
}

function returnText() {
    let amountofscores = 0;
    let score = 0; 
    let total = 0;
    let num = 1;
    let scores = [];

    while (num >= amountofscores) {
        amountofscores = parseInt(prompt("How many scores would you like to enter?"));
    }

    while (num <= amountofscores) {
        score = parseInt(prompt("Enter a score:"));
        total += Number(score);
        scores.push(score);
        num++;
    }

    let average = (total / amountofscores).toFixed(2);

    //display results in array
    let htmlString = "";
    for (let i = 0; i < scores.length; i++) {
        htmlString += "Score " + (i+1) + ": " + scores[i] + "</br>";
    }
    htmlString += "";
    //

    document.getElementById("result").innerHTML = htmlString + 'Your average test score is ' + average;


//display message 

    if (average <= 75) {
        document.getElementById("studyharder").innerHTML = 'Study harder next time!';
    } else {
        document.getElementById("greatjob").innerHTML = 'Keep up the great work!';
    }
}
