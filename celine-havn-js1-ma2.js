// Question 1
const myFunctionExpression = function() {
    console.log("Celine Havn");
};

// Question 2
const button = document.querySelector(".btn");

function respondToClick() {
    console.log('I was clicked');
}

button.addEventListener("click", respondToClick);
    

// Question 3
const input = document.getElementById("firstName");

input.addEventListener("keydown", function(event) {
    const key = event.key;
    console.log(key);
});

// Question 4
/*
const mouseOverButton = document.getElementsByTagName("button")[1];

mouseOverButton.addEventListener("mouseover", function() {
    mouseOverButton.classList.add("hover");
});
*/

// Question 5
const removeMouseOver = document.querySelector("[data-animal='dog']");

removeMouseOver.addEventListener("mouseout", function(){
    removeMouseOver.classList.remove("hover");
});

// Question 6

// Question 7
const animal = "cow";

switch(animal){

case "cat": 
    console.log("Meow");
    break;

case "cow":
    console.log("Moo");
    break;

case "bird":
    console.log("Tweet");
    break;

default:
    console.log("Harrumph");
}

// Question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
    console.log(sheep);
});

// Question 9
function logHelloTimer() {
    console.log("Hello");
    if (counter === 5) {
        clearInterval(intervalid);
    }
    counter++;
}
let counter = 0;
const intervalid = setInterval(logHelloTimer, 500);

// Question 10
const upDateContainerDiv = document.querySelector(".container");

function upDateDiv() {
    upDateContainerDiv.innerHTML = "Text updated";
}

setTimeout(upDateDiv, 2000);


