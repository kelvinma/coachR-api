module.exports = function(req, res, render) {

  req.models.workout.find({
    where: {
      id: req.params.workout_id 
    } 
  })
  .then(function(workout) {
    return workout.destroy();
  })
  .then(function() {
    res.json({});
  })
  .catch(function(err) {
    render(err);
  });

};