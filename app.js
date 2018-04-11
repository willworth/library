var express = require('express');
const port = 3000;

var app = express();

app.get('/', function(req, res){
    res.send("Hi");
})


app.listen(3000, function(){
    console.log('listening on port', port);
})