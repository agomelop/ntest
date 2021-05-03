
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
        try {
            res.send("ok")
        } catch (error) {
            res.status(500).send(error)
        }
    }
}


router.get('/green', colorCtrl.getGreen);
router.get('/red', colorCtrl.getRed);


module.exports = router