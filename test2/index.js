const express = require('express')
const app = express()
const myMid = require('./myMid')
const port = process.env.PORT || 3000

app.use(express.json())

app.use(myMid)

app.get('/', async (req, res)=>{
    try {
        let src = req.query.SRC;
        let resultado = await toUperCaseAfeterAsec(src)
        res.send(resultado)
    } catch (error) {
        res.sendStatus(500) 
    }
})

const toUperCaseAfeterAsec = (src) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(src.toUpperCase())
        }, 1000) 
    })
}

const runtime = app.listen(port,()=>{
  console.log("Runing on port: "+port)  
})
runtime.on('error', (err)=>{
    console.log(err)
})