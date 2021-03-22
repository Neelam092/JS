// 1.Find the number of o's in the given string
let message = 'Good Morning';
let findZeros = (str) => {
    let count = 0;
    for(let i= 0; i<=str.length-1; i++){
        let char = str.charAt(i);
        if (char==='o' || char==='O'){
            count++;
        }
    }
    return count;
}
console.log(findZeros(message));

// 2. find thr reverse string of the given string
message ='Good Morning';
let reverseString = (str) =>{
    let tempString = '';
    for(let i=str.length-1; i >=0; i--){
    let char = str.charAt(i);
    tempString += char;
  }
  return tempString;
}
console.log(reverseString(message));

// 3. check palindrome or not
message = 'ABA';
let isPalindrome = (str) =>{
    return(str === reverseString(str))
};
console.log(isPalindrome(message));

//4. Triangle string one
message = 'Neelam Rana';
let triangleOne = (str) =>{
    let tempStr = '';
    for(let i=1;i<=str.length; i++){
        tempStr += `${str.substr(0,i) }\n`;
    }
    return tempStr;
}
console.log(triangleOne(message));

//4. Triangle string Two
let  addSpace =(number) =>{
    let tempSpace = '';
    for(let i=0; i<=number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
}
message = 'Neelam Rana';
let triangleTwo = (str) =>{
    let tempStr = '';
    for(let i=0;i<=str.length-1; i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
}
console.log(triangleTwo(message));

// 5. Triangle String three
message = 'Neelam Rana';
let triangleThree = (str) =>{
    let tempStr = '';
    for(let i=str.length; i>=1; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
}
console.log(triangleThree(message));

// Triangle String 4
message = 'Neelam Rana';
let triangleFour = (str)=>{
    let tempStr = '';
    for(let i = str.length-1; i >=0; i--){
        tempStr += `${addSpace(i)} ${str.substr(i)} \n`;
    }
    return tempStr;
}
console.log(triangleFour(message));