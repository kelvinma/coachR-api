module.exports = function(req, res, render) {

  req.models.athlete
  .findAll()
  .then(function(athletes) {
    render({
      model: athletes,
      embedded: ['workouts']
      });
  })
  .catch(function(err) {
    render(err);
  });

};
