/* console.log('car 1');
console.log('car 2');
 setInterval( () =>{
     console.log('car 3');

 },3000);
console.log('car 4');
console.log('car 5'); */

// CallBack Function
/*let sum = (a,b) =>{
    return a+b;
};
let mul = (a,b) =>{
    return a*b;
};
let calculate = (a, b, operation) =>{
    return operation(a,b);
};
let output = calculate(10, 20 ,sum);
console.log(output);

output = calculate(10, 20 ,mul);
console.log(output);

output = calculate(10,20,(a,b) =>{
    return a-b;
});
console.log(output); */

 // Usage of callback function
let employees =[{id : 1, name : 'John', age : 40},
                {id : 2, name : 'Deo', age : 23},
                ];

let createEmployee = (employee,callback) => {
    setTimeout( () => {
        employees.push(employee);
        callback();
    } , 2000);
};
let getEmployees = () => {
    setTimeout( () => {
    let employeeRows = '';
    employees.forEach((employee) =>{
        employeeRows += `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.age}</td>
                         </tr>`;
        });
        document.querySelector('#table-body').innerHTML = employeeRows;
    },1000);
};
createEmployee({id : 3, name : 'Wilson',age : 40},getEmployees);


