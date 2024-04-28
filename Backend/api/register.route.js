//ok
import express from "express"
import usermodel from '../models/user.model.js'
const router = express.Router()

router.route('/').get((req, res) => {res.send("Done")});

router.route('/').post( async (req, res) => {
    console.log(req.body)
    const user = await usermodel.findOne({
		email: req.body.email,
	})

	if (!user) {
        await usermodel.create(req.body);
        res.send({status: 'ok'});
	}
    else{
        if(user.password === req.body.password)
        res.send({status: 'ok'});
    }


})

export default router