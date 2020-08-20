var testFolder = 'data'; // 현재디렉토리 ./
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
   console.log(filelist);
});