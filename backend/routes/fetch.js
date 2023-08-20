const express = require('express');
const User = require('../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');

var fetchuser = require('../middleware/fetchuser')

router.post('/getuser',fetchuser,async(req,res)=> {
    try {
        const userId = req.user;
        const user = await User.findById(userId).select('-password')
        console.log('User:', user);
        res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
}
})

module.exports = router;
