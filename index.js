const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const route=require('./routes/user.js')
const port=8000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/user',route);

app.get('/',(req,res)=>{
    res.send('this is home page');
})
app.listen(port,()=>{
    console.log(`server is listning on port http://localhost:${port}`);
})
