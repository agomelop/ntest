const express = require('express')
const app = express()
const colorRouter = require('./myCtrl')
const myMid = require('./myMid')
const tool = require('./tool')

const path = require('path')
const staticFolderPath = path.join(__dirname, 'public');

const port = process.env.port

app.use(express.json())

app.use(myMid)

app.use(colorRouter)


const runtime = app.listen(port,()=>{
  console.log("Runing on port: "+port)  
})
runtime.on('error', (err)=>{
    console.log(err)
})

