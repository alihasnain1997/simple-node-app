// import required essentials
const express = require('express');
// create new router
const router = express.Router();

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
    let found = data.find((item)=> 
                         item.id === parseInt(req.params.id)
    );
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

//WRITE

router.post('/',(req,res)=>{
    if(req.body.title){

    let id = data.map((item)=>item.id);
    let order = data.map((item)=>item.order)
    

    let newid = id.length+1;
    let newOrder = order.length+1;
    let newItem={
        id:newid,
        title:req.body.title,
        order:newOrder,
        completed:false,
        createdOn: new Date()
    }
    data.push(newItem);
    res.status(201).json(newItem);
}
else{
    res.sendStatus(404);
}
});


//UPDATE

router.put('/:id', function (req, res) {
    // find an object from `data` array match by `id`

    let found = data.find((item)=> 
                         item.id === parseInt(req.params.id)
    );
    
    // if object found return an object else return 404 not-found
    if (found) {
        
        let updatedItem={

            id: found.id,
            title:req.body.title,
            order:req.body.order,
            completed:req.body.completed

        }
        let targetIndex = data.indexOf(found);
        data.splice(targetIndex,1,updatedItem);
       
        res.status(200).json(data);
    } else {
        res.sendStatus(404);
    }
})

//Delete

router.delete('/:id', function (req, res) {
    // find an object from `data` array match by `id`
    //console.log("inside delete route");
    let found = data.find((item)=> 
                         item.id === parseInt(req.params.id)
    );
    //console.log("after found",found);
    // if object found return an object else return 404 not-found
    if (found) {
       
        let index = data.indexOf(found);
      //  console.log("Index",index);
       data.splice(index,1);

        res.status(202).json(data);
    } else {
        res.sendStatus(404);
    }
})

module.exports = router;