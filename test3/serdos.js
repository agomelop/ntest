const express = require('express')
const app = express()
const port = process.env.port || 3002

app.use(express.json())

app.get('/dos', (req, res)=>{
    console.log("calling /dos")
    res.json({"name":"dos"})
})

const runtime = app.listen(port, ()=>{
    console.log("Running dos in port: "+ port)
})

runtime.on('error',(err)=>{
    console.log("Error: "+err)
})
