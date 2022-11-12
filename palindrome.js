const prompt = require("prompt-sync")({sigint : true});
let str = prompt("Enter your string : ");
let len = str.length;
let str1 ="";
for (let i = len-1; i >=0; i--) {
    str1 = str1 + str[i];
    
}


if(str1 == str){
    console.log("palindrome");
}
else{
    console.log("not a palindrome");
}