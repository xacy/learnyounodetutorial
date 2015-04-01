var retorno=0;
for(var i=2;i<process.argv.length;i++){
  retorno+=Number(process.argv[i]);
}
console.log(retorno);
