// indian watch
let indianWatch = () => {
    let options = {timezone: 'Asia/Kolkata'};
    let currentDate = new Date().toLocaleDateString('en-Us', options);
    let currentTime = new Date().toLocaleTimeString('en-Us', options);
    document.querySelector('#indian-date').innerText = currentDate;
    document.querySelector('#indian-time').innerText = currentTime;
};
setInterval(indianWatch ,1000);

// USA Watch
let usaWatch = () => {
    let options = {timezone: 'America/New_York'};
    let currentDate = new Date().toLocaleDateString('en-Us', options);
    let currentTime = new Date().toLocaleTimeString('en-Us', options);
    document.querySelector('#usa-date').innerText = currentDate;
    document.querySelector('#usa-time').innerText = currentTime;
};
setInterval(usaWatch ,1000);

// China Watch
let chinaWatch = () => {
    let options = {timezone: 'Asia/Shanghai'};
    let currentDate = new Date().toLocaleDateString('en-Us', options);
    let currentTime = new Date().toLocaleTimeString('en-Us', options);
    document.querySelector('#china-date').innerText = currentDate;
    document.querySelector('#china-time').innerText = currentTime;
};
setInterval(chinaWatch ,1000);
