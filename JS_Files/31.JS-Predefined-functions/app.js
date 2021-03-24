let count = 0;
let interval = 0;
let greet = ()=> {
    count++;
    console.log(` Hello Welcome to JS : ${count}`);
};
interval = setInterval(greet,1000); // keep calling for every seconds

console.log(new Date().toLocaleTimeString());
setTimeout(() =>{
    clearInterval(interval);
},5000);


