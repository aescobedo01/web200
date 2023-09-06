/*Create a program that asks the user for the 
dimensions of different shapes and then calculate 
and display the area of the shapes. Do not include 
shape choices. That will come later. For now, just 
include multiple shape calculations in sequence
*/

// this function returns the area of a rectangle only. 
function rectangleArea() {

    let widthofr = parseFloat(document.getElementById("widthRec").value);
    let heightofr = parseFloat(document.getElementById("heightRec").value);
    // let widthoft = parseFloat(document.getElementById("widthTri").value);
    // let heightoft = parseFloat(document.getElementById("heightTri").value);

    // const calcTri = widthoft * heightoft * .5;
    //return widthofr * heightofr;
    
    // calculate area of rectangle
    const calcRec = widthofr * heightofr;

    // return area
    return calcRec; 

}

// this function calls the rectangleArea function to get the value of the area of a rectangle. 
function returnRectangle(){
    console.log(rectangleArea());
    document.getElementById("results").innerHTML = 'The are of a rectangle is ' + rectangleArea() + '.';
}