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




