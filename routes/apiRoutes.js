const Workout = require('../models/workout.js');
const router = require('express').Router();

//get all database data
router.get('/api/workouts', (req, res) => {
  Workout.find()
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => res.json(err))
});

//create a new workout
router.post('/api/workouts', (req, res) => {
  Workout.create({
    exercises: []
  })
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => res.json(err))
});

//add a new exercise to workout
router.put('/api/workouts/:id', ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true })
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => res.json(err))
});

//delete workout
router.delete('/api/workouts', ({ body }, res) => {
  Workout.findByIdAndDelete({ _id: body.id })
  .then(res =>{
    console.log(res)
  })
  .catch(err => res.json(err));
});

module.exports = router;