var http = require('http');
var url = require('url');

function parseTime (iso) {

  return {
    hour: iso.getHours(),
    minute: iso.getMinutes(),
    second: iso.getSeconds()
  }
}

function parseUnix (iso) {
  return { unixtime : iso.getTime() }
}

var server = http.createServer(function (req, res) {
  var retorno=null;
  if(req.method != 'GET'){
    return res.end('send me a GET\n');
  }
  else{
    prueba=url.parse(req.url, true);
    iso=new Date(prueba.query.iso);
    if(prueba.pathname==='/api/parsetime'){
      retorno=parseTime(iso);
    }
    else if(prueba.pathname==='/api/unixtime'){
      retorno=parseUnix(iso)
    }
    if(retorno!=null){
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(retorno));
    }
  }
});
server.listen(process.argv[2]);
