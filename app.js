const express = require('express');
const port = 3000;
const chalk = require('chalk');
const debug = require('debug')('app');  // app will tell you where you are in the log!
const morgan = require('morgan');
const app = express();


// app.use(morgan('combined'));
app.use(morgan('tiny'));

app.get('/', function(req, res){
    res.send("Hi");
})


app.listen(3000, function(){
    // console.log('listening on port ' + chalk.green('3000'));
    //ES6 TEMPLATE LITERALS
    // console.log(`listening on port ${chalk.green('3000')}`);
    debug(`listening on port ${chalk.green('port')}`);
    // console.log('listening on port', port);
})