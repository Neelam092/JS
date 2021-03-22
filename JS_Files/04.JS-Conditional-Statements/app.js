//if-else
let time=13;
if(time <=12){
    wishMessage='Good Morning';
}
else if(time >12 && time<=17){
    wishMessage='good Afternoon';
}
else if(time > 17 && time<=23){
    wishMessage='Good Evening';
}
else{
    wishMessage='Enter a proper time';
}
console.log(wishMessage);

//   Switch Statement
let day= new Date().getDay();
switch(day){
    case 0:
        today= 'Sunday';
        break;
    case 1:
        today= 'Monday';
        break;
    case 2:
        today= 'Tuesday';
        break;
    case 3:
        today= 'Wednesday';
        break;
    case 4:
        today= 'Thursday';
        break;
    case 5:
        today= 'Friday';
        break;
    case 6:
        today= 'Saturday';
        break;
    default:
        today='Enter a Proper day';
        break;
}
console.log(`Today is ${today}`);