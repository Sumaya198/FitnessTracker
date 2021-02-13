//dependency files
const express = require('express');
//we want the router portion of express
const router = express.Router()
const path = require('path');

//import models

const Fitness = require('../models/fitness')


//action plan:
//Add exercises to most recent workout
//(POST/updateOne)

//Add exercises to a new workout plan
//(POST)

//view the combined weight of multiple exercises from the past seven workouts on the stats page
//(GET)

//view total workout duration of each workout from the past seven workouts on the stats page.
//(GET)

module.exports = function(app) {
router.get("/api/workouts", (req, res) => {
    //responses will be in json because they have /api
    res.sendFile(path.join(__dirname, './public/api'))
})
router.post("/api/workouts", (req, res) =>{
    res.sendFile(path.join(__dirname, './public/api'))
})
router.put("/api/workouts", (req, res) => {
    res.sendFile(path.join(__dirname, './public/api'))
})

}

module.exports = router

