/*Create a program that calculates the area of a room to determine the 
            amount of floor covering required. The room is rectangular with the dimensions 
            measured in feet with decimal fractions.
            The output needs to be in square yards. There are 3 linear feet to a yard.[3]
*/

function flooringArea(){
    let floorwidth = parseFloat(document.getElementById("flooringWidth").value);
    let floorlength = parseFloat(document.getElementById("flooringLength").value);

    //The output needs to be in square yards. There are 3 linear feet to a yard.
    const width = floorwidth / 3;
    const length = floorlength / 3;

    calcFloor = width * length;

    return calcFloor;
}

function returnText(){
    console.log(flooringArea());
    document.getElementById("result").innerHTML = 'The area of flooring required is ' + calcFloor + ' yards. Happy building!';
}

function changeStyle(){
    document.getElementById("smileyface").src="https://th.bing.com/th/id/R.83dac006b4734de41f069aa5a52000c5?rik=a9y8aLJU8lkkuA&pid=ImgRaw&r=0";

}