var http = require('http');

http.get(process.argv[2],function(response){
  var allData=[];
  var charNumber=0;
  //response.setEncoding('utf8');
  response.on("data",function(data){
    //allData+=data.write();
    allData.push(data);
  });
  /*
  Hay que lanzara el evento end porque si lo dejas como lo comentado no se ejecuta al terminar de leer si no antes.
  */
  response.on("end", function(){
    console.log(allData.join('').toString().length);
    console.log(allData.join(''));
  });
  /*charNumber=allData.length;
  var result=allData.join('');
  console.log(charNumber);
  console.log(result);*/
});
