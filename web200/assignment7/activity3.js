function returnText() {
    let pi = 3;
    let num = 1;
    let denom = 2;
    let iterations = parseInt(document.getElementById("piIterations").value);
    
    for (let i = 0; i < iterations; i++) {

        pi += num * (4 / (denom * (denom + 1) * (denom + 2)));

        num *= -1;

        denom += 2;
    }

    
document.getElementById("result").innerHTML = 'Your average test score is ' + pi; 
}