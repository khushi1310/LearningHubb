//ok
import express from "express"
import flash from '../models/flashcard.model.js'
const router = express.Router()

router.route('/').get((req, res) => {res.send("Done")});

router.route('/').post( async (req, res) => {
    console.log(req.body)

        await flash.create(req.body);
        res.send({status: 'ok'});

})

export default router