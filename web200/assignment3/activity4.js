/*Create a program that asks the user for the 
dimensions of different shapes and then calculate 
and display the area of the shapes. Do not include 
shape choices. That will come later. For now, just 
include multiple shape calculations in sequence
*/

// this function returns the area of a rectangle only. 
function rectangleArea() {

    let widthofrec = parseFloat(document.getElementById("widthRec").value);
    let heightofrec = parseFloat(document.getElementById("heightRec").value);

    const calcRec = widthofrec * heightofrec;

    // return area
    return calcRec; 

}

function triangleArea(){
    let widthoftri = parseFloat(document.getElementById("widthTri").value);
    let heightoftri = parseFloat(document.getElementById("heightTri").value);

    const calcTri = widthoftri * heightoftri * .5;

    return calcTri;

}


// this function calls the rectangleArea function to get the value of the area of a rectangle. 
function returnRectangle(){
    console.log(rectangleArea());
    document.getElementById("result1").innerHTML = 'The area of a rectangle is ' + rectangleArea() + '.';
}

function returnTriangle() {
    console.log(triangleArea());
    document.getElementById("result2").innerHTML = 'The area of a triangle is ' + triangleArea() + '.';
}