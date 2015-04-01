var http = require('http');
var datos=[];
var index;
var count=0;

function getUrls(url1,url2,url3){
  var urls=[url1,url2,url3];
  var i=0;
  for(i=0;i<3;i++){

    getURLData(urls[i],i);
  }

}
function pintarResultados(){
  //console.log("resultados");
  console.log(datos[0]);
  console.log(datos[1]);
  console.log(datos[2]);
}
function getURLData(url,index){
  http.get(url,function(response){
    var allData=[];
    var charNumber=0;
    //response.setEncoding('utf8');
    response.on("data",function(data){
      //allData+=data.write();
      allData.push(data);
    });
    response.on("end",function(){
      //console.log("prueba"+count);
      count++;
      datos[index]=allData.join('');
      if(count===3){
        pintarResultados();
      }
    });
  });
}
getUrls(process.argv[2],process.argv[3],process.argv[4]);
