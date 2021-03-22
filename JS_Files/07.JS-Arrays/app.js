// Creation of an array
let numbers = [10,30,20,40, 'apple'];
console.log( numbers)

// Access the elements of an array
console.log(numbers[0]);

// Iteration of array elements
let colors = ['white' ,'black' , 'blue' ,'green', 'yellow'];
//1. normal for loop
let result ='';
for(let i=0;i<=colors.length-1; i++){
    result += `${colors[i]} `;
}
console.log(result);

//2.for-in loop  upto ES5
result= '';
for(let index in colors) {
    result += `${colors[index]} `;
}
console.log(result);//index


//*********** 3.for-of loop **************************
result='';
for(let color of colors) {
    result += `${color}  `;
}
console.log(result);//value

//************** 4. forEach function upto ES5 ************
result ='';
colors.forEach(function(color) {
    result += `${color} `;
});
console.log(result);

// ******************** 5. forEach with arrow function form SE6
result ='';
colors.forEach(color => result += `${color} `);
console.log(result);

// Array of object
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
        id : 3,
        name : 'Luise',
        age : 24,
        designation : 'Engineer',
        isActive : true
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
console.log(employees);
console.log(employees[0].name);
//iterate employees
result = '';
for(let employee of employees){
    result += `${employee.name} `;
}
console.log(result);

// Filter the junior Employees : age<= 30
console.log(employees);
let juniorEmployees = [];
for(let employee of employees){
    if(employee.age <=30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

//Filter active employees : isActive : true
let activeEmployees = [];
for(let employee of employees){
    if(employee.isActive){
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);