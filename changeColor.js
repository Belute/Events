let y = Math.floor((Math.random() * 100 + 1)); // Atsitiktinis sk


document.getElementById("btn").onclick = function () {


    let x = document.getElementById("input").value;  //reiksme ivesta i input

    if (x == y) {
        document.getElementById("2ndp").innerHTML = "Number is right "

    }
    else if (x > y) {

        document.getElementById("2ndp").innerHTML = "Number is greater "
        document.getElementById("answer").innerHTML = y
    }
    else {

        document.getElementById("2ndp").innerHTML = "Number is smaller "
        document.getElementById("answer").innerHTML = y

    }
}
function myFunction(x) {
    x.style.background = "yellow";
}
console.log(y)  //pasitikrinimui

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
}

