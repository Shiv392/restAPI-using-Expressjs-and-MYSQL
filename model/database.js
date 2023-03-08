const express=require('express');
const mysql=require('mysql');

const mysqlconnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Shiv@3923',
    database:'restapi'
})

mysqlconnection.connect((err)=>{
    if(err) console.warn(err);
    else console.log(`connection successfull to mysql`);
})

module.exports=mysqlconnection;