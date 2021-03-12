//require in the relevant model
const Workout = require("../models/workout.js");
//require in expressrouter
const router = require("express").Router()
//post request to create workouts
router.post("/api/workouts",(req, res) => {
 Workout.create({})
 .then(dbWorkout => {
     res.json(dbWorkout);
 })
 .catch(err => {
     res.status(400).json(err);
 });
});
//put request to update a workout
router.put("/api/workouts/:id", ({body, params}, res) =>{
   Workout.findByIdAndUpdate(params.id, { $push: {exercises: body}},
    {new: true, runValidators: true}).then(workoutAdded => {
        res.json(workoutAdded);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//get request to get workouts out of database
router.get("/api/workouts", (req, res) => {
    Workout.findOne().then(dbWorkout => { 
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})
//get request to get a range of workouts out of the database
router.get("/api/workouts", (req,res) => {
    Workout.findAll().then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})
//dete request to delete a workout
router.delete("/api/workout", )
//exports the router
module.exports = router;