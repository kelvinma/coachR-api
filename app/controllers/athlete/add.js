module.exports = function(req, res, render) {

  req.models.athlete
  .create(req.body.athlete)
  .then(function(athlete) {
    render(athlete);
  })
  .catch(function(err) {
    render(err);
  });

};