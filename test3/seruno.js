const express = require('express')
const app = express()
const port = process.env.port || 3001

app.use(express.json())

app.get('/uno', (req, res)=>{
    console.log("calling /uno")
    res.json({"name":"uno"})
})

const runtime = app.listen(port, ()=>{
    console.log("Running uno in port: "+ port)
})

runtime.on('error',(err)=>{
    console.log("Error: "+err)
})