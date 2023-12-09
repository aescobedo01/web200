let pizzaCount = 0;
let totalCost = 0;

let sizeprice = {
    small: 12,
    medium: 14.75,
    large: 16.50
};

let toppingprice = {
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
    '<div class="mypizza"><input type="checkbox" id="0' + pizzaCount + '" name="topping' + pizzaCount + '" value="cheese" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="0">Cheese</label>' +
    '<input type="checkbox" id="1' + pizzaCount + '" name="topping' + pizzaCount + '" value="ham" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="1">Ham</label></div>' +
    '<div class="mypizza"><input type="checkbox" id="2' + pizzaCount + '" name="topping' + pizzaCount + '" value="jalapeno" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="2">Jalapeno</label>' +
    '<input type="checkbox" id="3' + pizzaCount + '" name="topping' + pizzaCount + '" value="onion" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="3">Onion</label></div>' +
    '<div><input type="checkbox" id="4' + pizzaCount + '" name="topping' + pizzaCount + '" value="pineapple" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="4">Pineapple</label>' +
    '<input type="checkbox" id="5' + pizzaCount + '" name="topping' + pizzaCount + '" value="pepperoni" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="5">Pepperoni</label></div>' +
    '<div><input type="checkbox" id="6' + pizzaCount + '" name="topping' + pizzaCount + '" value="spinach" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="6">Spinach</label>' +
    '<input type="checkbox" id="7' + pizzaCount + '" name="topping' + pizzaCount + '" value="mushroom" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="7">Mushroom</label></div>' +
    '<button type="button" class="buttondesign" onclick="addPizza()">Add Another Pizza</button>';
  
    pizzaForm.appendChild(newForm);
    updatePrice();
}

function updatePrice() {
    totalCost = 0; //cost reset
    let pizzaDeets = document.getElementById("pizzaDeets");
    pizzaDeets.innerHTML = ""; //remove previous pizza deets
    for (let i = 1; i <= pizzaCount; i++) {

    let size = document.querySelector(`input[name="size${i}"]:checked`).value;
    let toppings = document.querySelectorAll(`input[name="topping${i}"]:checked`);
    let pizzaPrice = sizeprice[size] + toppings.length * toppingprice[size];
    totalCost += pizzaPrice;
    console.log(`Pizza ${i}: Size - ${size}, Toppings - ${toppings.length}, Price - ${pizzaPrice}`);

    //add the details of the pizzza to pizzaDeets
    pizzaDeets.innerHTML += `<p>Pizza ${i}: ${size}, ${toppings.length} toppings, $${pizzaPrice.toFixed(2)}</p>`;
    }
    document.getElementById("pizzaTotals").innerText = `Base Price: $${totalCost.toFixed(2)}`;
    let tax = totalCost * 0.10;
    document.getElementById("taxesCost").innerText = `Sales Tax: $${tax.toFixed(2)}`;
    let grandTotal = totalCost + tax;
    document.getElementById("totalCostPizzas").innerText = `Grand Total: $${grandTotal.toFixed(2)}`;
}