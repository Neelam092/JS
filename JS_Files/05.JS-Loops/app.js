                            // ******************** For loop **********************
let result=' '
for(let i=0;i<=10;i++) {
    if(i<=9){
    result+=  `${i} , `;
    }
    else{
        result +=  `${i} ` ;
    }
}
console.log(result);

                          // *************** Nested For loop **********************
let number= 5;
result='';
for(let i=1; i<=number;i++) {
    for (let j = 1; j <= i; j++) {
        result += `* `;
    }
    result += `\n`;
}
console.log(result);

                         //****************** while loop ***************************
let num='';
let i =0;
while(i<=10){
    num+=`${i} `;
    i++;
}
console.log(num);
                     //*********************** Nested While loop ****************
let point='';
let marks=5;
i= 5;
while(i>=1){
    let j=1;
    while(j<=i){
        point+=`${j} `;
        j++;
    }
    point+= `\n`;
    i--;
}
console.log(point);

                  // *********************** Do- While loop ****************
let ans='';
 i=0;
do{
    if(i<=9){
        ans+= `${i}`;
    }
    else{
        ans +=`${i}`;
    }
    i++;
}
while(i<=10);
console.log(ans);