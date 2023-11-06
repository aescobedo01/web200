window.onload = function() {
    document.getElementById("myBtn").addEventListener("click", myFunction);
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