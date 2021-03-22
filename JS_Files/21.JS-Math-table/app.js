// Math Table
let numberEl = document.querySelector('#req-number');
numberEl.addEventListener('keyup',function () {
    let theNumber;
    theNumber = Number(numberEl.value);
    document.querySelector('#number').inneeText = theNumber;
    calculate();
});

let rangeEl = document.querySelector('#multiplier');
rangeEl.addEventListener('input',function () {
    let selectedMultiplier;
    selectedMultiplier = Number(rangeEl.value);
    document.querySelector('#multi').innerText = selectedMultiplier;
    calculate();
});

// Calculate
let calculate= () => {
    let theNumber = Number(document.querySelector('#number').innerText);
    let multiplier;
    multiplier = Number(document.querySelector('#multi').innerText);
    let MathResult;
    MathResult = theNumber * multiplier;
    document.querySelector('#result').innerText = MathResult;
};