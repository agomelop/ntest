const express = require('express')
const app = express()
const myMid = require('./myMid')
const port = process.env.PORT || 3000
console.log(port)


app.use(express.json())

app.use(myMid)

app.get('/test', async (req, res)=>{
    let resultado = await myPromesa()
    res.send(resultado)
})


const myPromesa = async () =>{
    return Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({"res":"done!"})
        }, 1000)
    })
}

const runtime = app.listen(port,()=>{
  console.log("Runing on port: "+port)  
})

runtime.on('error', (err)=>{
    console.log(err)
})

