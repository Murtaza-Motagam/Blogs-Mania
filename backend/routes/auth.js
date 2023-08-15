const express = require('express');
const Users = require('../models/Users')
const Blogs = require('../models/Blogs')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const fetchUser = require('../middleware/fetchUser');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'AuthenticateUser';


// ROUTE 1: create a user using: POST "/api/auth/signup" . No Login Required...

router.post('/signup', [
    body('username', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Enter a valid password').isLength({ min: 5 }),
    body('cpassword', 'Enter a valid password').isLength({ min: 5 })
], async (req, res) => {

    let success = false;

    // If there are errors, return bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }


    // Wrapping the authentication data into try and catch method to avoid indiscipline 

    try {
        let user = await Users.findOne({ username: req.body.username });

        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this username already exists" });
        }

        if (req.body.password === req.body.cpassword) {

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt)

            user = await Users.create({
                username: req.body.username,
                password: secPass,
            });

            const data = {
                user: {
                    id: user.id
                }
            }

            const authtoken = jwt.sign(data, JWT_SECRET);
            success = true;

            res.json({ success, authtoken });
        }
        else{
            return res.status(400).json({ success, error: "Sorry your both password not matching properly." });
        }

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
})


// ROUTE 2:  Login a user using: POST "/api/auth/login" . No Login Required...

router.post('/login', [
    body('username', 'Enter a valid username').isLength({min: 3}),
    body('password', 'Enter a valid password').exists(),
 ], async (req, res) => {
 
    let success = false;
 
    // If there are errors, return bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() })
    }
 
    const {username, password} = req.body;
 
    try {
       let user = await Users.findOne({ username });
 
       if(!user){
          success = false;
          return res.status(400).json({success, error: "please try to login with correct credentials"});
       }
 
       const passwordCompare = await bcrypt.compare(password, user.password);
 
       if(!passwordCompare){
          return res.status(400).json({errror: "please try to login with correct credentials"});
       }
 
       const data = {
          user:{
             id: user.id
          }
       }
 
       const authtoken = jwt.sign(data, JWT_SECRET);
       success = true;
       res.json({success,  authtoken });
 
 
    } catch (error) {
       console.error(error.message);
       res.status(500).send("Internal Server Error");
    }
 
 })


 // Route-3: Fetch user entire data.

router.post('/getuser', fetchUser, async (req, res) => {

    try {

        let userId = req.user.id;
        const userInfo = await Users.findById(userId).select("-password");
        res.send([userInfo]);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

 // Route-3: Fetch user entire data.

router.get('/getprofiledata', fetchUser, async (req, res) => {

    try {

        let userId = req.user.id;
        const userInfo = await Users.findById(userId).select("-password");
        const blogsInfo = await Blogs.find({ user: req.user.id });
        const blogLength = blogsInfo.length;
        res.send([{userInfo, blogLength}]);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

module.exports = router;
