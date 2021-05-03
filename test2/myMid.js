
const myMid = (req, res, next)=>{

    let ip = req.ip
    let blockIp = "::2"
    if(ip === blockIp){
        res.sendStatus(401)
    }
    console.log("Midellwareeeeeeeee")
    next()
}

module.exports = myMid