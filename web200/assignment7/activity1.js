/*Create a program that uses nested loops to generate a multiplication table. 
    Rather than simply creating a 10 by 10 table, ask the user to enter the 
    starting and ending values. Include row and column labels. */

function returnText(){

    let startval = parseInt(document.getElementById("startValue").value);
    let endval = parseInt(document.getElementById("endValue").value);
    let num = 1;
    let num2 = 1;
    let result = document.getElementById("result");

    for(i = startval; i <= endval; i++) {
        for(let k = i; k >= 0; k++){
            printf("%3d", i);
        }
        printf("\n");
        document;
    }

}