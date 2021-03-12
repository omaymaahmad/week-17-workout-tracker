//require in the relevant model
const Workout = require("../models/workout.js");
//require in expressrouter
const router = require("express").Router()
//post request to create workouts
router.post("/api/workout", ({body}, res) => {
 Workout.create(body)
 .then(dbWorkout => {
     res.json(dbWorkout);
 })
 .catch(err => {
     res.status(400).json(err);
 });
});
//put request to update a workout
router.put("/api/workout/:id", function(req, res) {
    db.Workout.updateOne({_id: req.params._id}, {rating: req.body.rating}).then(function(dbWorkout){
        res.json(dbWorkout);
    });
});
//get request to get workouts out of database

//get request to get a range of workouts out of the database
//dete request to delete a workout
//exports the router
module.exports = router;