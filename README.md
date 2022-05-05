

# Number Guess JS



This project is for **educational** porpuses only. 

Site published at: https://belute.github.io/Number_Guess_js/


## Project features


-   CSS
-   JS
-   HTML

## Authors

Justinas: [Github](https://github.com/Belute)

## Code sample



```css
body {
display: grid;
grid-template-columns: 100px 1fr 100x;
grid-template-areas: 
".container.";
height: 200px;
margin-top: 10%;

}
```
```js
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

}

function appendCard(card) {

    let parent = document.querySelector(`main`);
    parent.append(card);


}



```
```html
     <di class="container">
        <h1 class="antr" onclick="showCoords(event)">Click this!.</h1>
        <p id="demo"></p>
        <div onmousedown="WhichButton(event)"></div>
        <p id=1stp class="text">Guess a number from 0 to 100</p>
        <input onfocus="myFunction(this)" id=input class="inputNumber" type=number min=0 max=100>
        <button form onreset="message()" id=btn class="buttons" id="btn2">Submit</button>
        <p id=2ndp class="answer"></p>
        <p id=answer class="answer"></p>




        //


        </div>
```
