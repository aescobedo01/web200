let pizzaCount = 0;

function addPizza() {
    pizzaCount++;
    let pizzaForm = document.getElementById("pizzaForm");
    let newForm = document.createElement("form");
    newForm.innerHTML = '<h3>Build-your-own pizza ' + pizzaCount + '</h3>' +

    '<label for="toppings">Toppings:</label><br>' +
    '<input type="text" id="toppings" name="toppings"><br>' +

    '<p>Please select a size:</p>' +
    '<input type="radio" id="smallSize" name="small" value="12">' +
    '<label for="small">Small 12"</label><br>' +
    '<input type="radio" id="mediumSize" name="medium" value="14">' +
    '<label for="medium">Medium 14"</label><br>' +
    '<input type="radio" id="largeSize" name="large" value="16">' +
    '<label for="large">Large 16"</label><br>' +

    '<span class="designtemplate">Cheese</span>' +
    '<input type="checkbox" class="designtemplate" name="cheese" value="cheese">' +
    '<label for="cheese" class="designtemplate">Cheese</label><br>' +

    '<span class="designtemplate">Toppings</span>' +
    '<input type="checkbox" class="designtemplate" name="ham" value="ham">' +
    '<label for="ham" class="designtemplate">Ham</label><br>' +
    '<input type="checkbox" class="designtemplate" name="ham" value="ham">' +
    '<label for="ham" class="designtemplate">Ham</label>' +
    '<input type="checkbox" class="designtemplate" name="ham" value="ham">' +
    '<label for="ham" class="designtemplate">Ham</label>' +
    '<input type="checkbox" class="designtemplate" name="ham" value="ham">' +
    '<label for="ham" class="designtemplate">Ham</label>' +
    '<input type="checkbox" class="designtemplate" name="ham" value="ham">' +
    '<label for="ham" class="designtemplate">Ham</label>' +
    '<input type="checkbox" class="designtemplate" name="ham" value="ham">' +
    '<label for="ham" class="designtemplate">Ham</label>' +
    '<input type="checkbox" class="designtemplate" name="ham" value="ham">' +
    '<label for="ham" class="designtemplate">Ham</label>' +
    '<input type="checkbox" class="designtemplate" name="ham" value="ham">' +
    '<label for="ham" class="designtemplate">Ham</label>' +

    '<button type="button" onclick="addPizza()">Add Another Pizza</button>';
  
    pizzaForm.appendChild(newForm);
}