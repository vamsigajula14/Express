const express = require('express');

const app = express();


app.get('/add',(req,res)=>{
    try{
        const a = req.query.a;
        const b = req.query.b;
        const val = parseInt(a) + parseInt(b);
        res.status(200).json({
            result : val
        });
    }catch(err){
        res.status(400).send("Invalid Input");
    }
});

app.get('/sub',(req,res)=>{
    try{
        const a = req.query.a;
        const b = req.query.b;
        const val = parseInt(a) - parseInt(b);
        res.status(200).json({
            result : val
        });
    }catch(err){
        res.status(400).send("Invalid Input");
    }
});

app.get('/mul',(req,res)=>{
    try{
        const a = req.query.a;
        const b = req.query.b;
        const val = parseInt(a) * parseInt(b);
        res.status(200).json({
                result : val
        });
    }catch(err){
        res.status(400).send("Invalid Input");
    }
});


app.get('/div',(req,res)=>{
    try{
        const a = req.query.a;
        const b = req.query.b;
        const val = parseInt(a) / parseInt(b);
        res.status(200).json({
            result : val
        });
    }catch(err){
        res.status(400).send("Invalid Input");
    }
});

app.listen(3000);


