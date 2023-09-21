/*Create a program that uses nested loops to generate a multiplication table. 
    Rather than simply creating a 10 by 10 table, ask the user to enter the 
    starting and ending values. Include row and column labels. */

    window.onload = function() {
        document.getElementById("myBtn").addEventListener("click", returnText);
    }

function returnText(){

    let startval = parseInt(document.getElementById("startValue").value);
    let endval = parseInt(document.getElementById("endValue").value);
    let result = document.getElementById("result");
    let tableItem = "";
    tableItem += "<table border='1' callpadding='10'>";

    startval--;

    for(i = startval; i <= endval; i++) {
        tableItem += "<tr>"
        for(let k = startval; k <= endval; k++){
            if(i == startval && k == startval){
                tableItem += '<td>' + "x" + '</td>';
            }
            else if(i == startval && k != startval) {
                tableItem += '<th style="background-color: #005427">' + k + '</th>';
            }
            else if(k == startval && i != startval) {
                tableItem += '<th style="background-color: #228B22">' + i + '</th>';
            }
            else {
                tableItem += '<td>' + (i * k) + '</td>';
            }
        }
        tableItem += "</tr>";
    }
    console.log(result);
    tableItem += "</table>";
    result.innerHTML = tableItem;
}