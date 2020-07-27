const Workouts = require('../models/workout');
const router = require('express').Router();


// -- create a get /api/workouts route
router.get('/api/workouts', ({ body }, res) => {
    Workouts.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        })
    // -- -- return and array of workout objs
    // -- -- the last should be the most recent

})
// -- create POST /api/workouts
router.post('/api/workouts', (req, res) => {

})
// -- create a PUT endpoint for api/workouts/:id
router.put('/api/workouts/:id', (req, res) => {

})
// -- -- should update whatever id they had
/* use the mongo model to update stuff */
