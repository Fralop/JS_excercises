const container = document.querySelector ("#container");
const paragraph = document.createElement ("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const div = document.createElement("div");
div.style.background = "pink";
div.style.borderColor = "black";
div.style.borderStyle = "double";
    const h1 = document.createElement("h1");
    h1.textContent = "I'm in a div"
    div.appendChild(h1);
    const p = document.createElement("p");
    p.textContent = "ME TOO!";
    div.appendChild(p);
container.appendChild(div);
