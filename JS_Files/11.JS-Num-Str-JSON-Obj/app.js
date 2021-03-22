// Number Objects

// min number
console.log(Number.MIN_SAFE_INTEGER);

// max number
console.log(Number.MAX_SAFE_INTEGER);

// positive infinity
console.log(Number.POSITIVE_INFINITY);

// negative infinity
console.log(Number.NEGATIVE_INFINITY);

// Parse Int
let str = '100.78';
let num = Number.parseInt(str);
console.log(`${typeof str} => ${typeof num}`);


// toString
let num1 = 100;
let numString = num1.toString();
console.log(`${typeof num1} => ${typeof numString}`);

// toFixed
let amount = 520;
console.log(amount.toFixed(2));

// ------ String Related Operations -----------
let message = String('Good Morning');
// length
console.log(message.length);
// lowercase
console.log(message.toLowerCase());
// uppercase
console.log(message.toUpperCase());
//subString(start index ,  no of chars
console.log(message.substr(3,8));
// charAt
console.log(message.charAt(3));
// charCodeAt(Ascii)
console.log(message.charCodeAt(3));

// JSON Object
/*
       string => object: parse()
       object => string: stringify()
 */

let student = {
    name : 'Raj',
    age : 40,
    course : 'CSE',
    college : 'IIT Mumbai'
};
console.log(student);

// object to string
let studentStr = JSON.stringify(student);
console.log(studentStr);

// string to object
let newStudent =JSON.parse(studentStr);
console.log(newStudent);