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


    let average = total / amountofscores;
    
    document.getElementById("result").innerHTML = 'Your average test score is ' + average;

    let htmlString = "<ul>";
    for (let i = 0; i < scores.length; i++) {
        htmlString += "<li>Score " + (i+1) + ": " + scores[i] + "</li>";
    }
    htmlString += "</ul>";
    document.getElementById("result").innerHTML = htmlString;


//display message 

    if (average <= 75) {
        document.getElementById("studyharder").innerHTML = 'Study harder next time!';
    } else {
        document.getElementById("greatjob").innerHTML = 'Keep up the great work!';
    }
}
