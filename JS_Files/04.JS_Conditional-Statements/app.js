//Assignment operators: =
let test=10;
console.log(test)
// Arithmetic operators
let num1= 54
let num2= 30
console.log(`Sum : ${num1 + num2}`)
console.log(`Sub : ${num1 - num2}`)
console.log(`Mul : ${num1 * num2}`)
console.log(`Div : ${num1 / num2}`)
console.log(`Rem : ${num1 % num2}`)

                    //  Conditional operator
let num=14
if(num % 2===0) {
    console.log(`${num} is even`)
}
else{
    console.log(`${num} is odd`)
    }

                         // unary operator
let x=10;
++x;
console.log(x++)

                //Logical operator
let inRelation= true;
let parentAggreed= true;
if(inRelation ^ parentAggreed) {
    console.log('Get Marry Soon')
}
else{
    console.log('Wait until the parent Agreed');
}
                    //Ternary Operator
marks=65;
message= '';
(marks<=35) ? message = 'You Failed the exam' : message='You Cleared the exam';
console.log(message)

            // Euality operator
a=10
b='10'
if(a==b){
    console.log('Both are equal')
}
else{
    console.log('Both are not eual')
}