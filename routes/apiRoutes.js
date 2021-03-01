const router = require("express").Router();
const Workout = require("../models/workout.js");



router.put('/api/workouts/:id', (req, res) =>{
  console.log(req.body);
  Workout.findByIdAndUpdate(req.params.id, {
    $match: {
      exercise: req.body
    }
  })
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => {
    console.log(err)
  })
})


router.get('/api/workouts', (req, res) => {
  Workout.find()
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => {
    console.log(err)
  });
});


router.post('/api/workouts', (req, res) => {
  Workout.create(req.body)
  .then(dbWorkout =>{
    res.json(dbWorkout)
  })
})


router.get('/api/workouts/range', (req, res) =>{
  Workout.find({})
  .then(dbWorkout =>{
    console.log(dbWorkout);
    res.json(dbWorkout)
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router;






