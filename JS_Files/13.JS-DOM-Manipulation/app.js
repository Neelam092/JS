
console.log(document);

console.log(document.title);
//change title
document.title = 'UI techno';

console.log(document.head);
console.log(document.body);

// Accessing the nav tag
let navTag = document.querySelector('nav');
console.log(navTag);

// Anchor tag
let anchorTag = document.querySelector('nav a');
console.log(anchorTag);

//innerText
let theText = anchorTag.innerText;
console.log(theText);

// change the inner text
anchorTag.innerText = 'Neelam Rana';


//h1 tag
let h1Tag = document.querySelector('#msg');
h1Tag.innerText = 'Good Evening';
console.log(h1Tag);

// style
h1Tag.style.backgroundColor = 'lightsalmon';
h1Tag.style.textAlign = 'center';
h1Tag.style.padding = '20px';
h1Tag.style.padding = '20px';
h1Tag.style.boxShadow = '0 0 10px black';

