// your JavaScript file
const container = document.querySelector('#container');

//create <p>
const content = document.createElement('p');
content.classList.add('content');
//in div add text 
content.textContent = 'Hey i m red !';
//gives red clr
content.style.color="red";

const heading = document.createElement('h3');
//add text
heading.textContent='i m a blue h3';
//give blue clr
heading.style.color="blue";

//create div

const div = document.createElement('div');
div.classList.add('text');

div.style.border="1px solid black";
div.style.backgroundColor="pink";

//inside h1

const head = document.createElement('h1');

head.textContent="I'm in a div";

//<p> say mee too

const paragraph = document.createElement('p');

paragraph.textContent='ME TOO!';



container.appendChild(content);
container.appendChild(heading);
container.append(div);
div.appendChild(head);
div.appendChild(paragraph);
//see what happen when light is on



















container.appendChild(div);

// <p> with red text that says hey i m red!

// const text = document.querySelector('#text');

// const contents = document.createElement('div');
// contents.classList.add('contents');
// contents.textContents = "Hey I'm red!";

// text.appendChild(contents);