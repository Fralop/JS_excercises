const container = document.querySelector("body");
const contentOne = document.createElement("p");
contentOne.style.color = "red"
contentOne.textContent = "Hey I'm red";
container.appendChild(contentOne);

const contentTwo = document.createElement("h3");
contentTwo.style.color = "blue";
contentTwo.textContent = "I'm a blue h3!"
container.appendChild(contentTwo);

const contentThree = document.createElement("div");
contentThree.style.border = "1px solid black";
contentThree.style.backgroundColor = "pink";
    const content3A = document.createElement("h1");
    content3A.textContent = "I'm in a div";
    contentThree.appendChild(content3A);
    const content3B = document.createElement("p");
    content3B.textContent = "ME TOO!"
    contentThree.appendChild(content3B);
container.appendChild(contentThree);

/* Method 2

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

Method 3:

const btn = document.querySelector('#btn');
btn.addEventListener("click", () => {
    alert("Hello World");
})

*/

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

const btn = document.querySelector("#btn");
btn.addEventListener("click", alertFunction);
  