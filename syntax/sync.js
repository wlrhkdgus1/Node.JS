var fs = require('fs');

// readFileSync

/*
console.log("A");
var result = fs.readFileSync('syntax/sample.txt','utf8');
console.log(result);
console.log("C");
// 답 : A B C*/

console.log("A");  
        // 노드야 readfile을 이용해서 sample.txt를 읽어와 시간이좀걸리니 다읽으면 3번쨰함수를 실행시켜!                         
fs.readFile('syntax/sample.txt','utf8', function(err, result){
    console.log(result);
});
console.log("C");
// 답 : A C B