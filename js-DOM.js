const container = document.querySelector("body");
const contentOne = document.createElement("p");
contentOne.style.color = "red"
contentOne.textContent = "Hey I'm red";
container.appendChild(contentOne);

const contentTwo = document.createElement("h3");
contentTwo.style.color = "blue";
contentTwo.textContent = "I'm a blue h3!"
container.appendChild(contentTwo);