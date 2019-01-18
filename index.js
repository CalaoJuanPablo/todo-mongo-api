var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var todoRoutes = require('./routes/todos');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.send('Hi from root route!!!');
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
  console.log('App runing on port: ' + port);
});