


function returnText() {
    let amountofscores = 0;
    let score = 0; 
    let total = 0;
    let num = 1;

    while (num >= amountofscores) {
        amountofscores = parseInt(prompt("How many scores would you like to enter?"));
    }

    while (num <= amountofscores) {
        score = parseInt(prompt("Enter a score:"));
        total += Number(score);
        num++;
    }


    let average = total / amountofscores;
    
    document.getElementById("result").innerHTML = 'Your average test score is ' + average;


    if (average <= 75) {
        document.getElementById("studyharder").innerHTML = 'Study harder next time!';
    } else {
        document.getElementById("greatjob").innerHTML = 'Keep up the great work!';
    }
}

