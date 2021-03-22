// date object
let date = new Date();
console.log(date);

// proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

// proper time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

// USA time
let options = {timeZone : 'America/New_York'};
let usaTime = new Date().toLocaleTimeString('en-us',options);
console.log(usaTime);

// USA date
let option = {timeZone : 'America/New_York'};
let usaDate = new Date().toLocaleDateString('en-us',option);
console.log(usaDate);

//today
let today =new Date().getDay();
switch(today) {
    case 0:
        today = 'Sunday';
        break;
    case 1:
        today = 'Monday';
        break;
    case 2:
        today = 'Tuesday';
        break;
    case 3:
        today = 'Wednesday';
        break;
    case 4:
        today = 'Thursday';
        break;
    case 5:
        today = 'Friday';
        break;
    case 6:
        today = 'Saturday';
        break;
    default:
        today = 'Enter a Proper day';
        break;
}
console.log(today);

// Month
let currentMonth =new Date().getMonth();
console.log(currentMonth);

//custom date
let c_date = new Date().getDate();
let c_Month = new Date().getMonth();
let c_year = new Date().getFullYear();
console.log(`${c_date}.${c_Month}.${c_year}`);
console.log(`${c_date}-${c_Month}-${c_year}`);
console.log(`${c_date}/${c_Month}/${c_year}`);