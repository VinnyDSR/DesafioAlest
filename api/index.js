const express=require('express');
const cors=require('cors');
const dataProducts = require('./configadmin.js');
const app=express();

app.use(express.json());
app.use(cors());

app.post("/create",async(req,res) =>{
    const data=req.body;
    await dataProducts.doc('macbook1').set(data);
    res.send({msg:"User Added"});

})


app.get("/get",async(req,res) =>{
    const data = await dataProducts.get();
        res.send({msg:"get"});

    if (data.empty) {
        console.log('No document');
        return;
       }
       data.forEach(doc => {
        console.log( doc.data(), ',' );
      });

})

app.put("/update",async(req,res) =>{
    const data=req.body;
    await dataProducts.doc('macbook1').update(data);
    res.send({msg:"User Updated"});
})



app.delete("/delete",async(req,res) =>{
    const data = await dataProducts.doc('macbook1').delete();
        res.send({msg:"deleted!"});


})

app.listen(4000,()=>console.log("Up & Running *4000"));