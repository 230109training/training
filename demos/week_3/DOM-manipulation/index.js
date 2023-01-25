console.log("hello there!");

// document is the DOM that all browser JS has access to and does not need to be imported
console.log(document);

// DOM traversal
let div = document.body.children[0];
let p = div.children[0];

// DOM to change inner text
p.innerText = "I have been changed by JS";

// DOM Selectors
let changeTextButton = document.getElementById("change_text_button");

let paragraphs = document.getElementsByClassName("paragraphs");
console.log(paragraphs);

let divs = document.getElementsByTagName("div");
console.log(divs);
console.log(divs[0].childNodes)
console.log(divs[0].children)

let uniquePara = document.querySelector("#unique_paragraph");
console.log(uniquePara);
console.log(uniquePara.nextSibling);
console.log(uniquePara.nextElementSibling);

let paragraphs2 = document.querySelectorAll(".paragraphs");
console.log(paragraphs2);

// Event Listener
changeTextButton.addEventListener("click", () => {
    p.innerText = "Updated!";
})

// replace element

let newHeader = document.createElement("h2");
newHeader.innerText = "new Header";

let parentDiv = uniquePara.parentElement;

parentDiv.removeChild(uniquePara);
parentDiv.appendChild(newHeader);



/**
 * Adding an event to an element
 * 
 * First select the element from the DOM
 * Then create a function to be ran when the event occurs
 * Then using addEventListener, add a listener for a specific event and the function to be ran
 */

let header3 = document.querySelector("#header3");

// Next, use the addEventListener function to add a function that will be run when that event occurs
// on the element

// This function will be passed into the addEventListener function as a callback

function changeBackgroundToRed(event){
    let element = event.target;
    element.setAttribute("style", "background-color: red");
}

function changeBackgroundToBlue(event){
    let element = event.target;
    element.setAttribute("style", "background-color: blue");
}

header3.addEventListener("mouseover", changeBackgroundToRed);
header3.addEventListener("mouseout", changeBackgroundToBlue);

// Bubbling vs Capturing
// Default is bubbling, to make it capturing then add a true as an additional parameter
document.querySelector("#outer-div").addEventListener("click", () => {alert("OuterDiv")}, true);
document.querySelector("#inner-div").addEventListener("click", () => {alert("InnerDiv")}, true);
document.querySelector("#inner-header").addEventListener("click", () => {alert("Inner Header")}, true);

