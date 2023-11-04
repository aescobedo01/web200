/* const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  const keys = Object.toString(person);
  
  
  
  var grocery_list = {}

function addGroceryItem() {
  grocery_list[form.item.value] = {category: form.category.value, price: form.price.value};
  return false;

  Veitch, R. (2006). Can't Get No. New York, NY: DC Comics.
}*/

window.onload = function() {
    document.getElementById("myBtn").addEventListener("click", function(event){
        event.preventDefault();
        myFunction();
    }); 
    var inputs = document.querySelectorAll('#form input');
    inputs.forEach(input => input.addEventListener('keydown', handleEnter));

}

function handleEnter(event) {
    if (event.key==="Enter") {
        const form = document.getElementById('form');
        const index = Array.from(form.elements).indexOf(event.target);
        form.elements[index + 1].focus();
        event.preventDefault();
     }
 }

function myFunction(){

    let title = document.getElementById('titleInput').value;
    let author = document.getElementById('authorInput').value;
    let year = document.getElementById('yearInput').value;
    let publisher = document.getElementById('publisherInput').value;
    let city = document.getElementById('cityInput').value;
    let state = document.getElementById('stateInput').value;

    function Object(title, author, year, publisher, city, state) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.publisher = publisher;
        this.city = city;
        this.state = state;
    }

    let book1 = new Object(title, author, year, publisher, city, state);

    document.getElementById("result").innerHTML = book1.author + ' (' + book1.year + '). ' + book1.title + '. ' + book1.city + ', ' + book1.state + ': ' + book1.publisher + '.';
}