// JS Scopes
let a =10;  //  global / parent
{
    let a = 20; // local/child
}
    console.log(a);

// function
let greet = function () {
    let msg;
    msg = 'Good Morning';
    return msg ;
}
let result = greet();
console.log(result);