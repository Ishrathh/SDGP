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

// Calculate addiction
router.post("/addiction", async (req, res) => {
    console.log("Got the data");
    const {
        missedSchoolOrWork = parseInt(req.body.missedSchoolOrWork),
        liedAboutTime = parseInt(req.body.liedAboutTime),
        prioritizedHygiene = parseInt(req.body.prioritizedHygiene),
        physicalSymptoms = parseInt(req.body.physicalSymptoms),
        playFrequency = parseInt(req.body.playFrequency),
        playDuration = parseFloat(req.body.playDuration).toFixed(1),
        spending = parseFloat(req.body.spending).toFixed(2),
        thinkingFrequency = parseInt(req.body.thinkingFrequency),
        timeLossFrequency = parseInt(req.body.timeLossFrequency),
        negativeConsequences = parseInt(req.body.negativeConsequences),
    } = req.body;

    const inputData = [
        missedSchoolOrWork,
        liedAboutTime,
        prioritizedHygiene,
        physicalSymptoms,
        playFrequency,
        playDuration,
        spending,
        thinkingFrequency,
        timeLossFrequency,
        negativeConsequences,
    ];
    // console.log(inputData[0]);
    const oneDArray = [];
    oneDArray.push(...inputData);
    const twoDInput = [oneDArray];
    // for (let i = 0; i < twoDInput.length; i++) {
    //     for (let j = 0; j < twoDInput[i].length; j++) {
    //       console.log(twoDInput[i][j]);
    //     }
    // }

    // const picklePath = path.join("./addiction_model.pkl")
    
    const pythonProcess = spawn("python3", ['model_loader.py', JSON.stringify(twoDInput)]);
    pythonProcess.stdout.on("data", (data) => {
        const prediction = data.toString().trim();
        console.log(prediction);
        res.status(200).json({ prediction });
    });

    pythonProcess.on('close', (code) => {
        console.log('Process exitted with code: '+ code);
    });
})

module.exports = router;