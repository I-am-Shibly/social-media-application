const router = require('express').Router()
const bcrypt = require('bcrypt')

const User = require('../models/User')
const user = require('../models/User')

// Register
router.post('/register', async (req, res) => {
    try {
        // generate password
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

// login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });   
        const validPassword = await bcrypt.compare(req.body.password, user.password)

        if (!user && !validPassword) {
            res.status(400).json("user not found!")
        } else {
            res.status(200).json(user)
        }
        
    } catch (err) {
        res.status(500).json(err)
    }
});
module.exports = router