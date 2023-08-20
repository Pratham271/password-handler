const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Password = require("../models/password");
const {body,validationResult} = require('express-validator');


router.get('/fetchallpasswords', fetchuser, async(req,res)=>{
    try {
        const passwords = await Password.find({user:req.user})
        res.json(passwords)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

router.post('/addpassword', fetchuser, [
    body('username', 'Enter a valid title').isLength({min : 3})
], async(req,res)=> {
    try {
        const{username,password,website} = req.body;

        const errors = validationResult(req);
    
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()});
        }

        const recievedpassword = new Password({
            username, password, website, user: req.user
        })

        const savedpassword = await recievedpassword.save()

        res.json(savedpassword)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

router.put('/updatepassword:/id', fetchuser, [
    body('username', 'Enter a valid title').isLength({min : 3})
], async(req,res)=> {
    try {
        const{username,password,website} = req.body;
        
        const newPassword = {};
        if(username){newPassword.username = username}
        if(password){newPassword.password = password}
        if(website){newPassword.website = website}

        let pass = await Password.findById(req.params.id);

        if(!pass){return res.status(404).send("Not Found")}

        if(pass.user.toString() !== req.user){
            return res.status(401).send("Not Allowed");
        }

        pass = await Password.findByIdAndUpdate(req.params.id, {$set: newPassword}, {new:true})
        res.json({pass});
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

router.delete('/deletepassword/:id', fetchuser,async (req,res) => {

    try {
        let pass = await Password.findById(req.params.id);
        
        if(!pass){return res.status(404).send("Not Found")};
        
        if(pass.user.toString() !== req.user){
            return res.status(401).send("Not Allowed");
        }
        
        pass = await Password.findByIdAndDelete(req.params.id)
        res.json({"Success": "Password has been deleted", pass:pass});
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router
