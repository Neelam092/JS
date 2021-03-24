/* // Promises  with callback in JS
let doTask = (success , failure) =>{
    // doing the task
    let isDone = true;
    if(isDone){
        success('Task is done');
    }
    else {
        failure('Task is not done');
    }
};
doTask((message) =>{
    console.log(message);
} ,(message)=>{
    console.error(message);
}); */

/* // Actual promises creation
let cleanCamera = new Promise((resolve, reject)=>{
    //cleaning camera
    let isDone = true;
    if(isDone){
        resolve('Cleaning is done');
    }
    else {
        reject('Cleaning is not done');
    }
});
cleanCamera.then((message) => {
    console.log(message);
}).catch((err)=>{
    console.error(err);
}); */

/*// Dependent Promises in JS
let buildProject = new Promise((resolve, reject)=> {
    setTimeout(() => {
        // Build Project
        let isDone = true;
        if (isDone) {
            resolve('Project is finished');
        } else {
            reject('Project is not finished');
        }
    },1000);
},);
let attendTechRound = new Promise((resolve, reject)=> {
        setTimeout(() => {
            let isDone = true;
            if (isDone) {
                resolve('Technical Round is finished');
            } else {
                reject('Technical Round is not finished');
            }
        }, 2000);
});
let attendManagerRound = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    let isDone = true;
    if(isDone){
        resolve('Manager Round is finished');
    }
    else {
        reject('Manager Round is not finished');
    }
},3000);
})
let attendHRRound = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    let isDone = true;
    if(isDone){
        resolve('HR Round is finished');
    }
    else {
        reject('HR Round is not finished');
    }
},4000);
})
buildProject.then((message) => {
    let result = `${message} -> `;
    console.log(message);
    attendTechRound.then((message) => {
        let result = `${message} -> `;
        console.log(message);
        attendManagerRound.then((message) => {
            console.log(message);
            let result = `${message} -> `;
            attendHRRound.then((message) => {
                let result = `${message} -> `;
                console.log(message);
                //console.log(result);
            }).catch((err)=>{
                console.error(err);
            })
        }).catch((err)=>{
            console.error(err);
        })
    }).catch((err)=>{
        console.error(err);
    })
}).catch((err)=>{
    console.error(err);
}); */

// real time usage of Promises
let employees =[{id : 1, name : 'John', age:40 },{id : 2, name : 'Doe', age  :34 }];
// create Employee
let createEmployee  = (employee) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            employees.push(employee);
            let isDone = true;
            if(isDone){
                resolve();
            }
            else{
                reject('Employee Creation is Failed');
            }
        },2000);
    });
};
// get employee
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
createEmployee({id:3, name:'Wilson', age:30}).then(()=>{
    getEmployees();
}).catch((err)=>{
    console.error(err);
});
