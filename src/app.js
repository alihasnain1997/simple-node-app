const path = require('path')
const http = require('http');
var express = require('express')
var app = express();
let cors = require('cors');


const itemsRouter = require('../routes/items.js');
const public=path.join(__dirname,`../public`);
//console.log(itemsRouter);

//app.use(express.static(public));

app.use(express.json());

app.use(cors({origin: 'http://localhost:8100'}));

/* this '/items' URL will have two end-points:
→ localhost:3000/items/ (this returns array of objects)
→ localhost:3000/items/:id (this returns single object)
*/
app.use('/items', itemsRouter);

// default URL to API
app.use('/', function(req, res) {
    res.send('node-ex-api works :-)');
});

// app.get('/', function (req, res) {
//     res.send('hello world')
//   })
 
// app.get('/about', function (req, res) {
//     res.send('hello world')
//   })
 
  app.listen(3000,()=>{
    console.log("server started at port 3000")
  });