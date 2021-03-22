// keyup Event example
let  textBox = document.querySelector('#username');
textBox.addEventListener('keyup',function(){
    //alert('entered a text')
    let textEntered = textBox.value;
    let messageElement = document.querySelector('#msg');
    messageElement.innerText = textEntered;
});