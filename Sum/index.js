const express = require('express');

const app = express();

app.get('/sum',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const result = parseInt(a) + parseInt(b);

    res.send(result.toString());
})


app.listen(3000);