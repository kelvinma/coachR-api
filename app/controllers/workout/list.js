module.exports = function(req, res, render) {

  req.models.workout
  .findAll()
  .then(function(workouts) {
    render(workouts);
  })
  .catch(function(err) {
    render(err);
  });

};