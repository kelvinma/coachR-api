module.exports = function(req, res, render) {

  req.models.workout.find({
    where: {
      id: req.params.workout_id 
    }
  })
  .then(function(workout) {
    render({
      model: workout
    });
  })
  .catch(function(err) {
    render(err);
  });

};