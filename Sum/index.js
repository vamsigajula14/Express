const express = require('express');

const app = express();

function middleware(req,res,next){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const operation = req.path;
    alert(operation);
    if(operation == '/add'){
        next(a + b);
    }
    else if(operation == '/sub'){
        next(a - b);
    }
    else if(operation == '/mul'){
        next(a * b);
    }
    else if(operation == '/div'){
        next(a / b);
    }
    else{
        res.status(404).send("You hit an incorrect URL");
    }

}
app.use(middleware);

app.get('/add',(req,res,val)=>{
    res.status(200).send(val);
});

app.get('/sub',(req,res,val)=>{
    res.status(200).send(val);
});

app.get('/mul',(req,res,val)=>{
    res.status(200).send(val);
});


app.get('/div',(req,res,val)=>{
    res.status(200).send(val);
});

app.listen(3000);

