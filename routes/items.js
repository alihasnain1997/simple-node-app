// import required essentials
const express = require('express');
// create new router
const router = express.Router();
const itemFunc = require('../routes/itemsFunctions/itemfunc.js');


// create a JSON data array
let data = [
    { id: 1, title: 'Create a project',  order: 1, completed: true, createdOn: new Date() },
    { id: 2, title: 'Take a cofféé',     order: 2, completed: true, createdOn: new Date() },
    { id: 3, title: 'Write new article', order: 3, completed: true, createdOn: new Date() },
    { id: 4, title: 'Walk toward home', order: 4, completed: false, createdOn: new Date() },
    { id: 5, title: 'Have some dinner', order: 5, completed: false, createdOn: new Date() },
];

///READ
// this end-point of an API returns JSON data array
router.get('/', function (req, res) {
    res.status(200).json(data);
});

// this end-point returns an object from a data array find by id
// we get `id` from URL end-points

///READ
router.get('/:id', (req, res)=> {
    // find an object from `data` array match by `id`
    itemFunc.read(data,req,res);
   
});

//WRITE

router.post('/',(req,res)=>{
    itemFunc.write(data,req,res);
});


//UPDATE

router.put('/:id', function (req, res) {
    // find an object from `data` array match by `id`

    itemFunc.update(data,req,res);
})

//Delete

router.delete('/:id',  (req, res)=> {
    // find an object from `data` array match by `id`
    //console.log("inside delete route");
    itemFunc.deleteData(data,req,res);
})

module.exports = router;