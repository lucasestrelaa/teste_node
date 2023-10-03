import express from "express"
import db from './../repositories/db.js'
import ProprietarioController from './../controllers/proprietario.controller.js'

const router = express.Router()

router.post("/", ProprietarioController.createController)
/*router.get('/', function (req, res, next){
    db.query('SELECT * From proprietarios', (err, results) => {
       res.send(JSON.stringify(results))
    })
})*/

export default router 