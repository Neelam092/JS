// Range Select
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
// format number
let formatNumber = (number) =>{
let result = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    return result;
};

let rangeEl = document.querySelector('#range');
let amountEl = document.querySelector('#amount');
rangeEl.addEventListener('input',function () {
    let selectedAmount = rangeEl.value;
    amountEl.innerText =formatNumber(selectedAmount);

})