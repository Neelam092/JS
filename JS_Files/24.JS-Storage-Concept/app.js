// Local Strorage for simple string

let empName = 'John';

// Set
localStorage.setItem('name',empName);

// Get
console.log(localStorage.getItem('name'));

// Delete the Key
localStorage.removeItem('name');

// clear
localStorage.clear();

// Local Storage with an array
let colors = [{ id: 1, name :'Blue'},
              { id: 2, name :'Green'},
              { id: 3, name :'Yellow'},
              { id: 4, name :'Pink'}];
localStorage.setItem('colors',JSON.stringify(colors));
console.log( localStorage.getItem('colors'));

let theColors = JSON.parse(localStorage.getItem('colors'));
console.log(theColors);

// Storage With simple string
let studentName = 'Rajan';

// Set
sessionStorage.setItem('name',studentName);

// Get
console.log(sessionStorage.getItem('name'));

// Delete
sessionStorage.removeItem('name');
// clear
sessionStorage.clear();

