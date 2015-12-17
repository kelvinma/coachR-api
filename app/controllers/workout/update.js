module.exports = function(req, res, render) {

  req.models.workout.find({
    where: {
      id: req.params.workout_id
    }
  })
  .then(function(workout) {
    console.log(req.body.workout);
    workout.title = req.body.workout.title;
    workout.date = req.body.workout.date;
    workout.type = req.body.workout.type;
    workout.duration = req.body.workout.duration;
    workout.distance = req.body.workout.distance;
    workout.notes = req.body.workout.notes;
    workout.updatedAt = new Date().getTime();
    workout.athlete_id = req.body.workout.athlete;
    /*
     * Set new values like this:
     * workout.some_field_name = req.body.workout.someFieldName;
     */

    return workout.save();
  })
  .then(function(workout) {
    render(workout);
  })
  .catch(function(err) {
    render(err);
  });

};
