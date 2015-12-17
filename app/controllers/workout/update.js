module.exports = function(req, res, render) {

  req.models.workout.find({
    where: {
      id: req.params.workout_id
    }
  })
  .then(function(workout) {
    console.log(req.body.workout);
    workout.title = req.body.title;
    workout.date = req.body.date;
    workout.type = req.body.type;
    workout.duration = req.body.duration;
    workout.distance = req.body.distance;
    workout.notes = req.body.notes;
    workout.updatedAt = new Date().getTime();
    workout.athlete_id = req.body.athlete;
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
