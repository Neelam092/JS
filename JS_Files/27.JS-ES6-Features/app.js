// 1. Template Strings(`)back tick operator
let mobile = {
    brand : 'Apple',
    price : 35000,
    color : 'silver'
};
let msg = "Brand : " + mobile.brand + " Price : " + mobile.price + " color : " + mobile.color;
console.log(msg);

let msg1 = `Brand : ${mobile.brand} Price : ${mobile.price} Color : ${mobile.color}`;
console.log(msg1);

let template1 = "<ul>" +
                   "<li>" + mobile.brand +"</li>"+
                   "<li>" + mobile.price +"</li>"+
                   "<li>" + mobile.color +"</li>"+
               "</ul>";
//or
let template2 = `<ul>
                    <li>${mobile.brand}</li>
                    <li>${mobile.price}</li>
                    <li>${mobile.color}</li>
                 </ul>`;
console.log(template1);
console.log(template2);

// 2. Optional parameters
let greet = function (name,age= 45) { // age is by default 45

    let msg = `Hello ${name} you age is ${age} Yrs.`;
    console.log(msg);
}
greet('John',40);

// 3. Arrow function
let printArrowFunction = () =>{
    let msg = ' ';
    for(let i=0; i<=10; i++){
        msg +=`${i} `;
    }
    return msg;
};
result = printArrowFunction();
console.log(result);

// usage of arrow function
let employees=[
    {
        id : 1,
        name : 'John',
        age : 40,
        designation : 'Manager',
        isActive : true
    },
    {
        id : 2,
        name : 'Wilson',
        age : 30,
        designation : 'Sr.Manager',
        isActive : false
    },
    {
        id: 3,
        name: 'Luise',
        age: 24,
        designation: 'Engineer',
        isActive: true
    },
    {
        id : 4,
        name : 'Laura',
        age : 45,
        designation : 'tech Lead',
        isActive : false
    },
    {
        id : 5,
        name : 'David',
        age : 26,
        designation : 'Engineer',
        isActive : true
    }
];
let jrEmployees = employees.filter(employee => employee.age <= 30);
console.log(jrEmployees);

// Normal For  loop
let ans = '';
for(let i =0; i<=employees.length-1; i++){
    let employee = employees[i];
    ans +=`${employee.name.toUpperCase()} `;
}
console.log(ans);

// for in loop upto ES5
ans = '';
for(let index in employees){
    let employee = employees[index];
    ans +=`${employee.name.toUpperCase()} `;
}
console.log(ans);

//4. for of loop upto ES6
ans = '';
for(let employee of employees){
    ans +=`${employee.name.toUpperCase()} `;
}
console.log(ans);

// for each function ES5
ans = '';
employees.forEach(function(employee){
    ans +=`${employee.name.toUpperCase()} `;
});
console.log(ans);

// for each   with arrow function ES6
ans = '';
employees.forEach(employee => {
    ans +=`${employee.name.toUpperCase()} `;
});
console.log(ans);

// 5.De-structuring ES6
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    address : {
        street : 'Hitech City',
        city : 'Hyderabad',
        state : 'TS'
    },
    hobbies : {
        regular : {
            id : 1,
            regHobbies : ['Reading books' , 'Playing football']
        },
        occasional : {
            id : 2,
            occHobbies : ['Reading cards', 'Playing online games']
        }
    }
};
// de-structuring
let {street ,city , state} = student.address;
console.log(`STREET : ${street} , CITY : ${city} , State :${state}`);

let {regHobbies} = student.hobbies.regular;
console.log(`RegularHobbies : ${regHobbies}`);

// 6. Spread operator
let numbers = [10,30,5,63,44,4,56,44,6,55, 6544, 4433, 433, 3];
let min = Math.min(...numbers);
console.log(min);
// Merge 2 arrays
let array1 = ['white','blue','purple','black'];
let array2 = ['Green','Yellow','pink','silver'];
/*let colors = [];
for( let color of array1){
    colors.push(color);
}
for(let color of array2){
    colors.push(color);
}
console.log(colors); */
let color = [...array1 , ...array2];
console.log(color);