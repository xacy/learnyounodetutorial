var fs = require('fs');
var lines=undefined;
//console.log(process.argv[2]+' - '+process.argv[1]);
function countLines(callback){
  fs.readFile(process.argv[2], function doneReading(err, fileContents){
    lines=fileContents.toString().split('\n').length-1;
    callback();
  });
}
function printLines(){
  console.log(lines);
}
countLines(printLines);
