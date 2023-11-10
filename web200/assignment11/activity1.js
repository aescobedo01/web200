window.onload = function () {
    document.getElementById("myBtn").addEventListener("click", myFunction);
}

function myFunction() {

const list = document.getElementsByTagName("*");
let text = "";
for (let i = 0; i < list.length; i++) {
    text += list[i].tagName + "<br>";
}

document.getElementById("result").innerHTML = text;
}

