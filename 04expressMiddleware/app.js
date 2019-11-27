const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use('/login',express.static(__dirname+'/public'));
app.post('/login',(req,res)=>{
    console.log(req.body.email);
    res.redirect('/');
});

app.get('/',(req,res)=>{
    res.send("<h1> Hello World</h1>")
});
app.listen(3000,()=>console.log('Server is running on port 3000'));