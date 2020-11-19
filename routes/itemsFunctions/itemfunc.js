let read=(data,req,res)=>{

let found = data.find((item)=> 
item.id === parseInt(req.params.id)
);
// if object found return an object else return 404 not-found
if (found) {
res.status(200).json(found);
} else {
res.sendStatus(404);
}
}


let write=(data,req,res)=>{
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
}

let update=(data,req,res)=>{
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
};

let deleteData=(data,req,res)=>{
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
}
module.exports={
    read:read,
    write:write,
    update:update,
    deleteData: deleteData
}