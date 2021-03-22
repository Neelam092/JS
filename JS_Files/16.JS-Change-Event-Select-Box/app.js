//change event on select box
let selectBox = document.querySelector('#lang-select');
selectBox.addEventListener('change',function(){
  //  alert('selected an option');
    let selectedOption = selectBox.value;
    let languageOptionEl = document.querySelector('#lang-option');
    languageOptionEl.innerText = selectedOption;
})
