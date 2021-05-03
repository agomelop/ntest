const express = require('express')
const app = express()
const colorRouter = require('./myCtrl')
const myMid = require('./myMid')
const tool = require('./tool')

const path = require('path')
const staticFolderPath = path.join(__dirname, 'public');

const port = process.env.port
console.log(port)

app.use(express.json())

app.use(myMid)

app.use('/api', colorRouter)


app.get('/merge/:id', async (req, res)=>{

    console.log(req.params)
    console.log(req.query)
    let unoRes = await tool.callUno()
    let dosRes = await tool.callDos()
    let result = tool.merge(unoRes, dosRes)
    res.json(result)
})

// The static files will be published on the /public URI
app.use('/public', express.static(staticFolderPath));


const myPromesa = () =>{
    return Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("lol")
        }, 1000)
    })
}

const fs = require('fs');

const fileDownload = (req, res) => {
  const filename = req.query.filename;
  // Create a read stream on the file to download
  const filePath = path.join(__dirname, 'public/'+filename);
  const readStream = fs.createReadStream(filePath);
  // Pipe the read stream into the response
  readStream.pipe(res);
};

app.use('/down', fileDownload);

var request = require('request');

app.get('/forward', function(req,res) {
  //modify the url in any way you want
  var newurl = 'http://google.com/';
  request(newurl).pipe(res)
    .on("error", err => res.sendStatus(500))
    .on('response', response => {
        // unmodified http.IncomingMessage object
        res.writeHead(response.statusCode, response.headers);
    });

})

const runtime = app.listen(port,()=>{
  console.log("Runing on port: "+port)  
})



runtime.on('error', (err)=>{
    console.log(err)
})

