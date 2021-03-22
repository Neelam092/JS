
let sayGoodWishes = (message,color)=> {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow ='0 0 10px black';

};
// good morning button
let gmButton = document.querySelector('#btn-gm');
gmButton.addEventListener('click',function(){
sayGoodWishes('Good Morning','limegreen');
});

// good Afternoon button
let gaButton = document.querySelector('#btn-ga');
gaButton.addEventListener('click',function(){
    sayGoodWishes('Good Afternoon','salmon');
});

// good Evening button
let geButton = document.querySelector('#btn-ge');
geButton.addEventListener('click',function(){
    sayGoodWishes('Good Evening','orange');
});

// good Night button
let gnButton = document.querySelector('#btn-gn');
gnButton.addEventListener('click',function(){
    sayGoodWishes('Good Night','red');
});