function returnText() {
    let miles = parseFloat(document.getElementById("milesInput").value);

    const yards = 1760;
    const feet = 5280;
    const inches = 63360;

    const calculateYards = miles * yards;
    const calculateFeet = miles * feet;
    const calculateInches = miles * inches;

    // document.getElementById("results").innerHTML = ([miles + ' miles is equal to ' + calculateYards + ' yards, ' + calculateFeet + ' feet, or ' + calculateInches + ' inches long.']);
    return calculateYards;
    return calculateFeet;
    return calculateInches;
}