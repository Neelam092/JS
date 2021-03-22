//print numbers from 0-10 diff 1
function printNumbers(){
    let result ='';
    for(let i=0; i<=10; i++){
        result +=`${i} `;
    }
    console.log(result);
}
printNumbers();
printNumbers();
printNumbers();
printNumbers();

// Function with 1 Parameter
function printMarks(endNumber){
    let marks = '';
    for(let i=0; i<=endNumber; i++){
        marks += `${i} `;
    }
    console.log(marks);
}
printMarks(50);
printMarks(100);

// Function with 2 Parameter
function printAns(startNumber,endNumber){
    let ans = '';
    for(let i=startNumber; i<=endNumber; i++){
        ans += `${i} `;
    }
    console.log(ans);
}
printAns(1,25);
printAns(10,30);

//Function  with Increment
function printIncrement(startNumber,endNumber, increment){
    let incre = '';
    for(let i=startNumber; i<=endNumber; increment){
        incre += `${i} `;
    }
    console.log(incre);
}
printIncrement(1,25,5);
printIncrement(10,30,6);

// Function without Parameters
function greet(){
    console.log('Good Morning');
}
greet();

//Function expression
let greetMe = function(){
    console.log('Good Morning');

}
greetMe();

//Function with parameter
let wishMe= function(name, age){
    let message =`Hello ${name} you are ${age} yrs old`;
    console.log(message);
}
wishMe('Jhon',40);

//Function with return type
let sum= function(a,b){
    let result;
    result = 2*(a+b);
    return result;
}
let output = sum(10,20);
console.log(output);

// function with an object as parameter
let printObject =function(obj){
    console.log(obj);
};
printObject({name: 'Rajan', age : 20});
//or
let mobile ={
    brand : 'Oppo',
    price : 35000,
    color : 'Silver'
};
printObject(mobile);

// function with an as a parameter
let printArray = function(array){
    let result = '';
    for(let index in array) result += `INDEX : ${index} =>VALUE : ${array[index]} \n`;
    console.log(result);
}
printArray([10,20,30,40]);
//or
let colors = ['white','black','blue','green'];
printArray(colors);

//function inside an object
let student ={
    FName : 'Arjun',
    lName : 'Reddy',
    fullName : function() {
        return 'Arjun Reddy'; //or `${this.fName} ${this.lName}`;
    }
};
console.log(student.fullName());

//Nested function
let outerFn =function(){
    console.log('I Am a outer function');
    let innerFn = function(){
        console.log('I am a inner function');
    };
    innerFn();
}
outerFn();

// twisted function
let twistedFn = function(){
    let name ;
    name = 'john';
    let printStudent;
    printStudent= function(){
        let student;
        student ={
            name : 'Rajan',
            age : 30,
            course : 'CSE'
        };
        return student;
    };
    return printStudent;
}
let innerFn = twistedFn();
let studentObj = innerFn();
console.log(studentObj.name);
