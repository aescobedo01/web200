let pizzaCount = 0;

let prices = {
    small: 1,
    medium: 1.75,
    large: 2.50
};

function addPizza() {
    pizzaCount++;
    let pizzaForm = document.getElementById("pizzaForm");
    let newForm = document.createElement("form");
    newForm.innerHTML = 
    '<h3>Build-your-own pizza ' + pizzaCount + '</h3>' +

    '<p>Please select a size</p>' +
    '<input type="radio" id="smallSize' + pizzaCount + '" name="size' + pizzaCount + '" value="12" onClick="updatePrice(' + pizzaCount + ')">' +
    '<label for="small">Small 12"</label><br>' +
    '<input type="radio" id="mediumSize" name="size" value="14">' +
    '<label for="medium">Medium 14"</label><br>' +
    '<input type="radio" id="largeSize" name="size" value="16">' +
    '<label for="large">Large 16"</label><br>' +

    '<span class="designtemplate">Toppings</span>' +

    '<div class="mypizza"><input type="checkbox" id="cheese' + pizzaCount + '" name="cheese' + pizzaCount + '" value="cheese">' +
    '<label for="cheese">Cheese</label>' +
    '<input type="checkbox" id="ham' + pizzaCount + '" name="ham' + pizzaCount + '" value="ham">' +
    '<label for="ham">Ham</label></div>' +
    '<div class="mypizza"><input type="checkbox" name="cheese" value="cheese">' +
    '<label for="cheese">Cheese</label>' +
    '<input type="checkbox" name="ham" value="ham">' +
    '<label for="ham">Ham</label></div>' +
    '<div class="mypizza"><input type="checkbox" name="cheese" value="cheese">' +
    '<label for="cheese">Cheese</label>' +
    '<input type="checkbox" name="ham" value="ham">' +
    '<label for="ham">Ham</label></div>' +
    '<div class="mypizza"><input type="checkbox" name="cheese" value="cheese">' +
    '<label for="cheese">Cheese</label>' +
    '<input type="checkbox" name="ham" value="ham">' +
    '<label for="ham">Ham</label></div>' +

    '<button type="button" class="buttondesign" onclick="addPizza()">Add Another Pizza</button>';
  
    pizzaForm.appendChild(newForm);
}