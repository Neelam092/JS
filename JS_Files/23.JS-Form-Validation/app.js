// Form Validation
let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit',function (event) {
    event.preventDefault(); //stop auto form submission
    if(validateForm()){
        alert('Form is Submitted Successfully');
    }
});

let validateForm = () => {
    return (checkUserName() & checkEmail() & checkPassword() & checkConfirmPassword());
};

let checkUserName = () =>{
    let inputEl = document.querySelector('#username');
    let inputFeedbackEl = document.querySelector('#username-feedback');
    let regExp = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;           // formula
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
};
let checkEmail = () =>{
    let inputEl = document.querySelector('#email');
    let inputFeedbackEl = document.querySelector('#email-feedback');
    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ // formula
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
};
let checkPassword = () =>{
    let inputEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#password-feedback');
    let regExp = /^[A-Za-z]\w{7,14}$/; // formula
    if(regExp.test(inputEl.value)){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
};
let checkConfirmPassword = () => {
    let inputEl = document.querySelector('#c_password');
    let passwordEl = document.querySelector('#password')
    let inputFeedbackEl = document.querySelector('#c_password-feedback');
    let regExp =  /^[A-Za-z]\w{7,14}$/; //formula
    if(regExp.test(inputEl.value) && inputEl.value === passwordEl.value){
        makeValid(inputEl,inputFeedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,inputFeedbackEl);
        return false;
    }
};
// Make valid
let makeValid = (inputEl,inputFeedbackEl) =>{
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedbackEl.classList.add('text-success');
    inputFeedbackEl.classList.remove('text-danger');
    inputFeedbackEl.innerText = 'Looks Good';
};
// Make Invalid
let makeInvalid = (inputEl,inputFeedbackEl) =>{
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid');
    inputFeedbackEl.classList.remove('text-success');
    inputFeedbackEl.classList.add('text-danger');
    inputFeedbackEl.innerText = `Please Enter a ${inputEl.placeholder}`;
};

// username field with keyup event
let usernameEl =  document.querySelector('#username');
usernameEl.addEventListener('keyup',function () {
    checkUserName();
});
// email field with keyup event
let emailEl =  document.querySelector('#email');
emailEl.addEventListener('keyup',function () {
    checkEmail();
});
// Password field with keyup event
let passwordEl =  document.querySelector('#password');
passwordEl.addEventListener('keyup',function () {
    checkPassword();
});
// confirm Password field with keyup event
let confirmPasswordEl =  document.querySelector('#c_password');
confirmPasswordEl.addEventListener('keyup',function () {
    checkConfirmPassword();
});
