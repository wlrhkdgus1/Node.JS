const { setupMaster } = require("cluster");

console.log(Math.round(1,6)); // 답 : 2반올림
console.log(Math.round(1,4)); // 답 : 1

function sum(first, second){ // parameter
     return first+second;
}

console.log(sum(2,4)); // argument
