const path = require('path')
var express = require('express')
var app = express();


const public=path.join(__dirname,`../public`);

app.use(express.static(public));

app.get('/', function (req, res) {
    res.send('hello world')
  })
 
app.get('/about', function (req, res) {
    res.send('hello world')
  })
 
  app.listen(3000,()=>{
    console.log("server started at port 3000")
  });