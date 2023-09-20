/*Create a program that uses nested loops to generate a multiplication table. 
    Rather than simply creating a 10 by 10 table, ask the user to enter the 
    starting and ending values. Include row and column labels. */

function returnText(){

    let startval = parseInt(document.getElementById("startValue").value);
    let endval = parseInt(document.getElementById("endValue").value);
    let result = document.getElementById("result");
    let tableTxt = "";
    tableTxt += "<table border='1' callpadding='10'>";

    startval--;

    for(i = startval; i <= endval; i++) {
        tableTxt += "<tr>"
        for(let k = startval; k <= endval; k++){
            if(i == startval && k == startval){
                tableTxt += '<td>' + "x" + '</td>';
            }
            else if(i == startval && k != startval) {
                tableTxt += '<th style="background-color: #005427">' + k + '</th>';
            }
            else if(k == startval && i != startval) {
                tableTxt += '<th style="background-color: #228B22">' + i + '</th>';
            }
            else {
                tableTxt += '<td>' + (i*k) + '</td>';
            }
        }
        tableTxt += "</tr>";
    }
    console.log(result);
    tableTxt += "</table>";
    result.innerHTML = tableTxt;
}