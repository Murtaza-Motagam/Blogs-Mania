const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const Blogs = require('../models/Blogs');



// ROUTE 1: Add a new Blog using: POST "/api/blogs/addblog" . Login Required...

router.post('/addblog', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 5 }),
    body('category', 'Enter a valid category').isLength({ min: 3 }),
    body('bloguser', 'Enter a valid username').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 })
], async (req, res) => {

    let success = false;

    try {
        const { title, category, bloguser, description, } = req.body;

        // If there are errors, return bad request and the errors 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() })
        }

        const blog = new Blogs({
            title, description, bloguser, category, 
            user: req.user.id
        })

        const savedBlog = await blog.save();
        success = true;
        res.json({success, savedBlog});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(success, "Some error occurred");
    }

})


//Route:2 Fetch all Blogs using : GET "api/blogs/fetchallblogs". Login Required...

router.get('/fetchallblogs', async (req, res) => {

    let success = false;
    
    try {
        const blogs = await Blogs.find({ });
        success = true;
        res.json(blogs);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(success, "Some error occurred");
    }
})

//Route-3:  Get Only User Personal Blogs using : GET "api/blogs/fetchuserblogs". Login Required..

router.get('/fetchuserblogs', fetchUser, async (req, res) => {

    let success = false;
    
    try {
        const blogs = await Blogs.find({ user: req.user.id });
        success = true;
        res.json(blogs);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(success, "Some error occurred");
    }
})

// ROUTE 4: Get blogs According to category: GET "/api/blogs/fetchbycategory" .

router.get('/fetchbycategory/:category',  async (req, res) => {

    let success = false;
    try {
        const blogs = await Blogs.find({ category: req.params.category });
        success = true;
        res.json({success, blogs});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send(success, "Some error occurred");
    }
})



module.exports = router;