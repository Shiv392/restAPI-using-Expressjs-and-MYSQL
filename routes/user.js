const bodyParser = require('body-parser');
const express=require('express');
const route=express.Router();
const mysql=require('../model/database.js');

route.use(express.json());
route.use(bodyParser.urlencoded({extended:true}));


route.get('/',(req,res)=>{
    mysql.query('select * from user',(err,result)=>{
        if(err) {
            res.status(500).send(`something went wrong`);
        }
        else{
            res.json(result)
        }
    })
})

route.post('/',(req,res)=>{
    const newuser=req.body;
    mysql.query('INSERT INTO user SET ?',newuser,(err,result)=>{
        if(err) res.status(400).send('Bad Request');
        else{
            res.status(201).json(result)
        }
    })
})

route.delete('/:id',(req,res)=>{
    const userid=req.params.id;
    mysql.query(`DELETE FROM user WHERE id=${userid}`,(err,result)=>{
        if(err) res.status(500).send('Internal Server Error');
        else res.status(200).send(`Id With ${userid} Has Been Created`)
    })
})

route.put('/:id',(req,res)=>{
    const newuserdata=[req.body.firstname,req.body.lastname,req.body.age]
    const userid=req.params.id;
    mysql.query(`UPDATE user SET firstname=?,lastname=?, age=?`,newuserdata,(err,result)=>{
        if(err) res.status(500).send('could not update');
        else {
            res.status(200).send(`user with id ${userid} has been updated`);
        }
    })

})

module.exports=route;