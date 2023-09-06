/*Create a program that asks the user for the 
dimensions of different shapes and then calculate 
and display the area of the shapes. Do not include 
shape choices. That will come later. For now, just 
include multiple shape calculations in sequence
*/

function returnText() {
    //
    let widthofr = parseFloat(document.getElementById("widthRec").value);
    let heightofr = parseFloat(document.getElementById("heightRec").value);
    let widthoft = parseFloat(document.getElementById("widthTri").value);
    let heightoft = parseFloat(document.getElementById("heightTri").value);

    const calcTri = widthoft * heightoft * .5;
    const calcRec = widthofr * heightofr;

    document.getElementById("results").innerHTML = (['The area of a triangle is ' + calcTri + ', and the are of a rectangle is ' + calcRec + '.']);
}