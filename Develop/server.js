// install and set up express
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
})
// serve the index page
// -- create a get home route
// -- create a get /api/workouts route
// -- -- return and array of workout objs
// -- -- the last should be the most recent
// -- create POST /api/workouts
// -- create a PUT endpoint for api/workouts/:id
// -- -- should update whatever id they had
/* use the mongo model to update stuff */



// think about data
// we're storing workouts
// date
// what are workouts, collections of exercises
// array
// -- exercise
// -- 
// total duration(updated w/ every new exercise)

/*
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  }
  */