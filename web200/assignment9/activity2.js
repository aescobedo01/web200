document.getElementById("datePick").addEventListener("change", function returnText() {
    let theDate = new Date(this.value);
    document.getElementById("day").value = theDate.getUTCDate();
    document.getElementById("month").value = theDate.getUTCMonth() + 1; // count from 0
    document.getElementById("year").value = theDate.getUTCFullYear();
});