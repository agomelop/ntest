
const express = require('express')
const router = express.Router()

const colorCtrl = {
    getOk : (req, res) => {
        res.sendStatus(200)
    },
    others : (req, res) => {
         res.sendStatus(404)
    }
}

router.get('/green', colorCtrl.getOk);
router.get('/red', colorCtrl.getOk);
router.get('/blue', colorCtrl.getOk);
router.get('/*', colorCtrl.others);


module.exports = router