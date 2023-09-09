
/*
how much paint is required
 how much it will cost
  Ask the user for the length, width, and height of
 a room, the price of a gallon of paint, and the number of square feet that a gallon
  of paint will cover.

  Calculate the total area of the four walls as
  2 * length * height + 2 * width * height .

  Calculate the number of gallons as
  total area / square feet per gallon .

  Note: round up to the next full gallon using the Math.ceil function.

    Calculate the total cost of the paint as: 
   gallons * price per gallon
*/

function anotherPaintFunction(){
    let length = parseFloat(document.getElementById("roomLength").value);
    let width = parseFloat(document.getElementById("roomWidth").value);
    let height = parseFloat(document.getElementById("roomHeight").value);
    let coverage = parseFloat(document.getElementById("paintCoverage").value);
   let price = parseFloat(document.getElementById("paintPrice").value);


    const walls1and2 = 2 * width * height;
    const walls3and4 = 2 * length * height;
    const totalAreaOfWalls = walls1and2 + walls3and4;

    totalPaintNeeded = Math.ceil(totalAreaOfWalls / coverage);

    return totalPaintNeeded;
}

function anotherMoneyFunction(){
    let length = parseFloat(document.getElementById("roomLength").value);
    let width = parseFloat(document.getElementById("roomWidth").value);
    let height = parseFloat(document.getElementById("roomHeight").value);
    let coverage = parseFloat(document.getElementById("paintCoverage").value);
    let price = parseFloat(document.getElementById("paintPrice").value);


    const walls1and2 = 2 * width * height;
    const walls3and4 = 2 * length * height;
    const totalAreaOfWalls = walls1and2 + walls3and4;
    const totalPaintNeeded = totalAreaOfWalls / coverage;

    totalPriceOfPaint = Math.round(totalPaintNeeded * price);

    return totalPriceOfPaint;
}

function paintFunction() {
    console.log(anotherPaintFunction());
    document.getElementById("paintresult").innerHTML = 'Estimated total gallon(s) of paint needed is ' + anotherPaintFunction() + ' gallon(s).';
}

function moneyFunction() {
console.log(anotherMoneyFunction());
document.getElementById("priceresult").innerHTML = 'Estimated total cost of paint needed is $' + anotherMoneyFunction() + '.';

}
