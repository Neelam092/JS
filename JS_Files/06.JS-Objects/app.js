let camera={
    brand : 'Canon',
    Color : 'Black',
    price : 35000,
    mfg : 2015
}
console.log(camera);
// ################ Access the properties of an object ####################
console.log(camera.brand)
console.log(camera['brand'])


// *************** Nested Object******************
let student={
    name : 'Arjun Reddy',
    age :35,
    course : 'hindi',
    address : {
        street : 'Jubilee Hills',
        city: ' Hyderabad',
        state : 'TS'
    }
}
console.log(student.address);
console.log(student.address.street)

// ************************** CRUD operations With an object *************
// CREATE operation
let mobile= {};
mobile.brand = 'Apple';
mobile.color = 'Sliver';
mobile.price = 35000;
mobile.isInsured = false;
console.log(mobile);

//   Read Operation
console.log(mobile.brand)

//   Update Operation
mobile.price = 45000;
console.log(mobile);

// Delete Operation
delete mobile.isInsured;
console.log(mobile);