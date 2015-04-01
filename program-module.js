var fs = require('fs');
var path= require('path');

module.exports = function(dir,filter, callback){
  //var data=null;
  fs.readdir(dir, function (err, list) {
    if(err)
      return callback(err);
    data=list.filter(function (file) {
      if (path.extname(file) === '.' + filter){
        return path.extname(file) === '.' + filter;
      }
    });
    callback(null,data);
  });
}
