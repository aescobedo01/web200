// defining variables for my pizza
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

//form appears when the addpizza button is clicked
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
        '<label for="large">Large 16"</label>' +

        '<p>Toppings</p>' +
        '<div class="checkboxContainer"><input class="inputalign" type="checkbox" id="0' + pizzaCount + '" name="topping' + pizzaCount + '" value="cheese" onClick="updatePrice(' + pizzaCount + ')">' +
        '<label class="labelalign" for="0">Cheese</label>' +
        '<input class="inputalign" type="checkbox" id="1' + pizzaCount + '" name="topping' + pizzaCount + '" value="ham" onClick="updatePrice(' + pizzaCount + ')">' +
        '<label class="labelalign" for="1">Ham</label></div>' +
        '<div class="checkboxContainer"><input class="inputalign" type="checkbox" id="2' + pizzaCount + '" name="topping' + pizzaCount + '" value="jalapeno" onClick="updatePrice(' + pizzaCount + ')">' +
        '<label class="labelalign" for="2">Jalapeno</label>' +
        '<input class="inputalign" type="checkbox" id="3' + pizzaCount + '" name="topping' + pizzaCount + '" value="onion" onClick="updatePrice(' + pizzaCount + ')">' +
        '<label class="labelalign" for="3">Onion</label></div>' +
        '<div class="checkboxContainer"><input class="inputalign" type="checkbox" id="4' + pizzaCount + '" name="topping' + pizzaCount + '" value="pineapple" onClick="updatePrice(' + pizzaCount + ')">' +
        '<label class="labelalign" for="4">Pineapple</label>' +
        '<input class="inputalign" type="checkbox" id="5' + pizzaCount + '" name="topping' + pizzaCount + '" value="pepperoni" onClick="updatePrice(' + pizzaCount + ')">' +
        '<label class="labelalign" for="5">Pepperoni</label></div>' +
        '<div class="checkboxContainer"><input class="inputalign" type="checkbox" id="6' + pizzaCount + '" name="topping' + pizzaCount + '" value="spinach" onClick="updatePrice(' + pizzaCount + ')">' +
        '<label class="labelalign" for="6">Spinach</label>' +
        '<input type="checkbox" class="inputalign" id="7' + pizzaCount + '" name="topping' + pizzaCount + '" value="mushroom" onClick="updatePrice(' + pizzaCount + ')">' +
        '<label class="labelalign" for="7">Mushroom</label></div>' +


        '<div class="errors" id="errors' + pizzaCount + '"></div>' +

        '<button type="button" class="buttondesign" onclick="addPizza()">Add Another Pizza</button>';

    pizzaForm.appendChild(newForm);

    //error message pops up when user selects topping without selecting size first
    let errorsDiv = document.getElementById("errors" + pizzaCount);

    newForm.querySelectorAll('input[name^="topping"]').forEach(function (toppingCheckbox) {
        toppingCheckbox.addEventListener('change', function () {
            let sizeRadios = newForm.querySelectorAll('input[name^="size"]');
            let sizeSelected = Array.from(sizeRadios).some(radio => radio.checked);
            if (!sizeSelected) {
                errorsDiv.innerHTML = "You must select a size before choosing toppings.";
                this.checked = false; // uncheck topping
            }
        });
    });

    //call updateprice function
    updatePrice();
}


////////////////////////////////////////////////////////////////////


// price breakdown and the pizza details (pizzadeets)
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

        //add the details of the pizza to pizzaDeets
        pizzaDeets.innerHTML += `<p>Pizza ${i}: ${size}, ${toppings.length} toppings, $${pizzaPrice.toFixed(2)}</p>`;
    }

    //price
    document.getElementById("pizzaTotals").innerText = `Price: $${totalCost.toFixed(2)}`;
    // 10% tax
    let tax = totalCost * 0.10;
    document.getElementById("taxesCost").innerText = `Sales tax: $${tax.toFixed(2)}`;
    //total
    let grandTotal = totalCost + tax;
    document.getElementById("totalCostPizzas").innerText = `Total: $${grandTotal.toFixed(2)}`;
}

//////////////////////////////////////////////////////////////////////////////////////

//prevent form submission when submit is clicked and use ajax and json to send results 

document.getElementById("pizzaGalore").addEventListener("click", submitAddPizzaForm);
document.getElementById("myBtn").addEventListener("click", confirmOrder);

let customerData = {};
let pizzaOrders = [];


//prevent form submission ( to see the results in the console )
function submitAddPizzaForm(e) {
    e.preventDefault(); // prevents submission
    let formData = new FormData(form);
    let checkedToppings = [];
    let size;
    
    // loop through all form input fields
    formData.forEach(function (value, key) {
        if (key === "toppings") {
            checkedToppings.push(value);
        } else {
            if (key === "size") {
                size = value;
            }
        }
    });

    let pizza = { size: size, toppings: checkedToppings };
    pizzaOrders.push(pizza);
}

// order confirmation body of customer info and pizza info
function confirmOrder() {

    const body = {
        customer: customerData,
        pizzas: pizzaOrders,
    };
    console.log("body: ");
    console.log(body);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://my-json-server.typicode.com/mikelangelo/pizzaJson/orders");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(body));
    xhr.onload = function () {

        console.log(JSON.parse(xhr.responseText));

    };
}

//error messages using if statements
function validateOrder(order) {
    if (!order.customer) {
        console.error("Customer information is missing.");
        return false;
    }
    if (!order.pizzas || order.pizzas.length === 0) {
        console.error("No pizzas in the order.");
        return false;
    }
    for (let pizza of order.pizzas) {
        if (!pizza.size) {
            console.error("Pizza size is missing.");
            return false;
        }
        if (!pizza.toppings) {
            console.error("Pizza toppings are missing.");
            return false;
        }
    }
    return true;
}

//custy object

document.getElementById('form').addEventListener('submit', function(event){

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('userAddress').value;
    let zipCode = document.getElementById('zipCode').value;
    let city = document.getElementById('userCity').value;
    let state = document.getElementById('stateList').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    
    let customerInfo = {
        'First Name': firstName,
        'Last Name': lastName,
        'Address': address,
        'Zip Code': zipCode,
        'City': city,
        'State': state,
        'Phone Number': phoneNumber
    };

    document.getElementById('customerInfo').textcontent = JSON.stringify(customerInfo, null, 2);

    console.log(customerInfo);
}
);