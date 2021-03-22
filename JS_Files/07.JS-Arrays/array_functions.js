// Function of arrays
console.log('------------Array Functions---------------');
let languages = ['html','css','javascript','bootstrap','jquery'];
console.log(languages);

//shift() ->Remove the first element from an array
console.log('------------shift Function---------------');
languages = ['html','css','javascript','bootstrap','jquery'];
console.log(languages);
languages.shift();
console.log(languages);

// unshift() ->add 1st element to an array
console.log('------------unshift Function---------------');
languages = ['html','css','javascript','bootstrap','jquery'];
console.log(languages);
languages.unshift('nodeJs');
console.log(languages);

//push() -> add last element to an array
console.log('------------push Function---------------');
languages = ['html','css','javascript','bootstrap','jquery'];
console.log(languages);
languages.push('angularJs');
console.log(languages);

// pop() -> remove last element from an array
console.log('------------pop Function---------------');
languages = ['html','css','javascript','bootstrap','jquery'];
console.log(languages);
languages.pop();
console.log(languages);

//sort() ->to sort the array in ascending order
console.log('------------sort Function---------------');
languages = ['html','css','javascript','bootstrap','jquery'];
languages.sort();
console.log(languages);
// reverse order
console.log('------------reverse order  ---------------');
languages = ['html','css','javascript','bootstrap','jquery'];
languages.sort().reverse();
console.log(languages);


//reverse() -> reverse the array element
console.log('------------reverse Function---------------');
languages = ['html','css','javascript','bootstrap','jquery'];
console.log(languages);
languages.reverse();
console.log(languages);

//splice(index) -> it remove all the elements from the given index
console.log('------------splice(index) Function---------------');
languages = ['html','css','javascript','bootstrap','jquery'];
console.log(languages);
languages.splice(4);
console.log(languages);

//splice(index, no of elements) -> it removes  the given no of elements from the given index
console.log('------------splice(index,no of elements) Function---------------');
languages = ['html','css','javascript','bootstrap','jquery'];
console.log(languages);
languages.splice(2,2);
console.log(languages);

//splice(index, 1, replace elements) -> it replaces  the elements from the given index
console.log('------------splice(index,replace  elements) Function---------------');
languages = ['html','css','javascript','bootstrap','jquery'];
console.log(languages);
languages.splice(3,1,'Raact JS');
console.log(languages);

//join() -> to join the array elements to string
console.log('------------join() ---------------');
languages = ['html','css','javascript','bootstrap','jquery'];
console.log(languages);
let techString = languages.join(' - ')
console.log(techString);

//split() -> to split the array elements to string
console.log('------------split() ---------------');
languages = ['html','css','javascript','bootstrap','jquery'];
console.log(languages);
let langString = languages.join(' - ');
console.log(langString);
let newTechs = langString.split('-');
console.log(newTechs);

// Filter the junior Employees : age<= 30
console.log('----------------filter()--------------');
 juniorEmployees = [];
for(let employee of employees){
    if(employee.age <=30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);
//or
let jrEmployees = employees.filter(function(employee){
    return employee.age <=30;
});
console.log(jrEmployees);

//Filter active employees : isActive : true
console.log('----------------filter()--------------');
activeEmployees = [];
for(let employee of employees){
    if(employee.isActive){
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);
//or
let actEmployees = employees.filter(function(employee){
    return employee.isActive;
});
console.log(actEmployees);
