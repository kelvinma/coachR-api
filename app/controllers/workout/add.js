module.exports = function(req, res, render) {

  req.models.workout
  .create(req.body.workout)
  .then(function(workout) {
    console.log('Created ', workout);
    render(workout);
  })
  .catch(function(err) {
    render(err);
  });

};
