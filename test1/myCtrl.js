
const express = require('express')
const router = express.Router()

const colorCtrl = {
    getGreen : (req, res) => {
        try {
            res.send("ok")
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getRed : (req, res) => {
        setTimeout(()=>{
            res.sendStatus(400) 
        }, 3000);
        

    }
}


router.get('/green', colorCtrl.getGreen);
router.get('/red', colorCtrl.getRed);


module.exports = router