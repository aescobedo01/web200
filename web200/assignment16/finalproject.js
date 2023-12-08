let pizzaCount = 0;
let totalCost = 0;

let prices = {
    small: 12,
    medium: 14.75,
    large: 16.50
};

let toppings = {
    small: 1,
    medium: 1.50,
    large: 2.50
};

function addPizza() {
    pizzaCount++;
    let pizzaForm = document.getElementById("pizzaForm");
    let newForm = document.createElement("form");
    newForm.id = "pizza" + pizzaCount;
    newForm.innerHTML = 
    '<h3>Build-your-own pizza ' + pizzaCount + '</h3>' +
    '<p>Please select a size</p>' +
    '<input type="radio" id="smallSize' + pizzaCount + '" name="size' + pizzaCount + '" value="small" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="small">Small 12"</label><br>' +
    '<input type="radio" id="mediumSize' + pizzaCount + '" name="size' + pizzaCount + '" value="medium" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="medium">Medium 14"</label><br>' +
    '<input type="radio" id="largeSize' + pizzaCount + '" name="size' + pizzaCount + '" value="large" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="large">Large 16"</label><br>' +
    '<span class="designtemplate">Toppings</span>' +
    '<div class="mypizza"><input type="checkbox" id="cheese' + pizzaCount + '" name="cheese' + pizzaCount + '" value="cheese" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="cheese">Cheese</label>' +
    '<input type="checkbox" id="ham' + pizzaCount + '" name="ham' + pizzaCount + '" value="ham" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="ham">Ham</label></div>' +
    '<div class="mypizza"><input type="checkbox" id="jalapeno' + pizzaCount + '" name="jalapeno' + pizzaCount + '" value="jalapeno" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="jalapeno">Jalapeno</label>' +
    '<input type="checkbox" id="onion' + pizzaCount + '" name="onion' + pizzaCount + '" value="onion" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="onion">Onion</label></div>' +
    '<div><input type="checkbox" id="pineapple' + pizzaCount + '" name="pineapple' + pizzaCount + '" value="pineapple" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="pineapple">Pineapple</label>' +
    '<input type="checkbox" id="pepperoni' + pizzaCount + '" name="pepperoni' + pizzaCount + '" value="pepperoni" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="pepperoni">Pepperoni</label></div>' +
    '<div><input type="checkbox" id="spinach' + pizzaCount + '" name="spinach' + pizzaCount + '" value="spinach" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="spinach">Spinach</label>' +
    '<input type="checkbox" id="mushroom' + pizzaCount + '" name="mushroom' + pizzaCount + '" value="mushroom" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="mushroom">Mushroom</label></div>' +
    '<button type="button" class="buttondesign" onclick="addPizza()">Add Another Pizza</button>';
  
    pizzaForm.appendChild(newForm);
}

function updatePrice(pizzaNumber) {
    let size = document.querySelector('input[name="size' + pizzaNumber + '"]:checked').value;
    let cheese = document.getElementById('cheese' + pizzaNumber).checked;
    let ham = document.getElementById('ham' + pizzaCount).checked;
    let jalapeno = document.getElementById('jalapeno' + pizzaCount).checked;
    let onion = document.getElementById('onion' + pizzaCount).checked;
    let pineapple = document.getElementById('pineapple' + pizzaCount).checked;
    let pepperoni = document.getElementById('pepperoni' + pizzaCount).checked;
    let spinach = document.getElementById('spinach' + pizzaCount).checked;
    let mushroom = document.getElementById('mushroom' + pizzaCount).checked;

    let pizzaPrice = prices[size];
    if (cheese) pizzaPrice += toppings[size];
    if (ham) pizzaPrice += toppings[size];
    if (jalapeno) pizzaPrice += toppings[size];
    if (onion) pizzaPrice += toppings[size];
    if (pineapple) pizzaPrice += toppings[size];
    if (pepperoni) pizzaPrice += toppings[size];
    if (spinach) pizzaPrice += toppings[size];
    if (mushroom) pizzaPrice += toppings[size];

    let totalCost = pizzaPrice x howevermanypizzas;
    let tax = totalCost * 0.1; //10% sales tax
    let grandTotal = totalCost + tax;
// 
    document.getElementById('pizzaTotals').innerHTML = 'Pizza price: $' + totalCost.toFixed(2);
    document.getElementById('taxesCost').innerHTML = 'Sales tax: $' + tax.toFixed(2);
    document.getElementById('totalCostPizzas').innerHTML = 'Total due: $' + grandTotal.toFixed(2);
// 

}

    /*let pizzaDetails = document.getElementById('pizza' + pizzaNumber);
    let priceDisplay = document.createElement('p');
    priceDisplay.innerHTML = 'Base price for this pizza: $' + pizzaPrice.toFixed(2);
    pizzaDetails.appendChild(priceDisplay);

    let taxDisplay = document.getElementById('taxesCost');
    taxDisplay.innerHTML = 'Sales tax: $' + tax.toFixed(2);

    let totalDisplay = document.getElementById('totalCostPizzas');
    totalDisplay.innerHTML = 'Grand total: $' + grandTotal.toFixed(2); */


