const Workouts = require('../models/workout');
const Workout = require('../models/workout');
const router = require('express').Router();


// -- create a post /api/workouts route
router.post('/api/workouts', (req, res) => {
    Workouts.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        })


})
// -- create GET/api/workouts
// -- -- return and array of workout objs
// -- -- the last should be the most recent
router.get('/api/workouts', (req, res) => {
    Workout.find()
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
})
// -- create a PUT endpoint for api/workouts/:id
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } }
    )
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
})
// -- -- should update whatever id they had
/* use the mongo model to update stuff */

// -- create a PUT endpoint for api/workouts/:id
router.delete('api/workouts', ({ body }, res) => {
    Workout.findOneAndDelete(body.id)
        .then((dbWorkout) => {
            res.json(true)
        })
        .catch((err) => {
            res.status(400).json(err);
        })
})

module.exports = router;


