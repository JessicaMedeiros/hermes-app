const express=require("express");
const cors=require("cors");
const db=require('./query'); 
//our all the query connections are there in query.js
const path = require('path');
const app=express();


var distDir = __dirname + "/dist/";
app.use(express.static(__dirname + '/public'));
app.use(express.static(distDir));
app.use(cors());

var port =  3333
app.use(express.json());
// app.use(express.json({ type: 'application/vnd.api+json' }));

app.use(express.urlencoded({ extended: true }));

app.get('/',(request,response)=>{response.json({info:'Node.js,Express, and Postgres API'});
});
app.listen(port,()=>{
console.log(`App running on port ${port}.`);
})