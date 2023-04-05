const router = require("express").Router();
const { spawn } = require("child_process");
const path = require("path");
const User = require("../models/User");

//Register User - Saves user in db
router.post("/register", async (req, res) => {
    User.findOne({ email: req.body.email})
    .then((user) => {
        if(!user) {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                addictionLevel: req.body.addictionLevel,
                weeklyTime: "0",
                photoURL: ''
            });
        
            try {
                newUser.save();
                res.status(201).json({message: "User was created"});
            } catch(err) {
                console.log(err)
            }
        } else {
            return res.status(401).json({ message: "Account exists for the following email." });
        }
    })
});

//Login user
router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email})
        .then((user) => {
            if(!user) {
                return res.status(404).json({ message: "User not found." });
            }
            if (user.password !== req.body.password) {
                return res.status(401).json({ message: "Incorrect password" });
            }
            res.json(user);
        })
        .catch((err) => res.status(400).json({ message: "Could not login user" }));
});

module.exports = router;