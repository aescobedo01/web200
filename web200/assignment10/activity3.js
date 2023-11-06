/*
Create a web page that allows the user to enter book information for a bibliography.
    Include properties for title, author, year, publisher, city, and state.
    Respond to one or more user interface events to create an instance
    of a Book object and then display the book properties in APA format:
    
 Extend the program above by adding an MLA method to your Book object that automatically formats the book for display. 
 Display both APA and MLA formats for the book:[3]
    APA: Last, F. M. (Year) Title. City, State: Publisher.
    MLA: Last, First M. Title. Publisher, Year.
*/


window.onload = function () {
    document.getElementById("myBtn").addEventListener("click", myFunction);
}

function myFunction() {
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let year = document.getElementById("yearInput").value;
    let publisher = document.getElementById("publisherInput").value;
    let city = document.getElementById("cityInput").value;
    let state = document.getElementById("stateInput").value;


    function Book(title, author, year, publisher, city, state) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.publisher = publisher;
        this.city = city;
        this.state = state;
    }

//split name into APA format using .split method
    function nameSplitAPA(author) {
        let parts = author.split(' ');
        let fName = parts[0];
        let lName = parts[1];
        return lName.concat(', ', fName.charAt(0), '.');
    }

//split name into mla
//ask teacher if theres a way to run 1 name split function with 2 diff results

function nameSplitMLA(author) {
    let parts = author.split(' ');
    let fName = parts[0];
    let lName = parts[1];
    return lName.concat(', ', fName, '.');
}

    let formattedNameAPA = nameSplitAPA(author);
    let formattedNameMLA = nameSplitMLA(author);

    let book1 = new Book(title, formattedNameAPA, year, publisher, city, state);
    let book2 = new Book(title, formattedNameMLA, year, publisher)

    document.getElementById("resultAPA").innerHTML = 'APA: ' + book1.author + ' (' + book1.year + '). ' + book1.title + '. ' + book1.city + ', ' + book1.state + ': ' + book1.publisher + '.';
    document.getElementById("resultMLA").innerHTML = 'MLA: ' + book2.author + ' ' + book2.title + '. ' + book2.publisher + ', ' + book2.year + '.';
}