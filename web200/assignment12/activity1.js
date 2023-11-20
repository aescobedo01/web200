/*
    Extend this code 
    to use an array to hold the information generated during processing 
    and display the results from the array using dynamic HTML to create 
    and append HTML elements after processing is complete

Avoid global variables by passing parameters and returning results. 
*/

window.onload = function () {
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
        htmlString += "Score " + (i + 1) + ": " + scores[i] + "</br>";
    }
    htmlString += "";
    
    document.getElementById("result").innerHTML = htmlString + 'Your average test score is ' + average;


    //display message 

    if (average <= 75) {
        document.getElementById("studyharder").innerHTML = 'Study harder next time!';
    } else {
        document.getElementById("greatjob").innerHTML = 'Keep up the great work!';
    }

    //disappear start here button

    document.getElementById('myBtn').setAttribute("style", "visibility:hidden");

    // reload button
    let btn = document.createElement("button");
    let textbtn = document.createTextNode("Try again");

    btn.setAttribute("class", "buttondesign");
    btn.setAttribute("value", "calculate");

    btn.appendChild(textbtn);
    document.body.appendChild(btn);

    btn.addEventListener("click", btnFunction);

    function btnFunction() {
        window.location.reload();
    }
}
