const container = document.querySelector ("#container");
const paragraph = document.createElement ("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);
const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);