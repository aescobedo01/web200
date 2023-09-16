
    function returnText() {
        let num = parseInt(document.getElementById("numberInput").value);
        let amountoftimes = parseInt(document.getElementById("amountOfTimes").value);
        let i = 1;
        let txt = "";

        while (i <= amountoftimes) {
            txt += num + " x " + i + " = " + num * i + "<br>";
            i++;
        }

            document.getElementById("result").innerHTML = txt;
    }