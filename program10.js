var net = require('net');
var server = net.createServer(function (socket) {
  date=new Date();
  var fecha=date.getFullYear()+"-"+(("0" + (date.getMonth() + 1)).slice(-2))+"-"+(("0" + (date.getDate())).slice(-2))+" "+date.getHours()+":"+date.getMinutes();
  socket.end(fecha+'\n');
});
server.listen(Number(process.argv[2]));
