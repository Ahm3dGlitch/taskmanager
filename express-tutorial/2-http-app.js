const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('./public'))
app.listen(5000,()=>{
    console.log("server is listening to port 5000 ......");
})

app.use
app.get('/',(req, res)=>{
    res.status(200).sendFile(path.join(__dirname,'./public/index.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send('resourcse not found')
})