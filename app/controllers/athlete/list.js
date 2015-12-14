module.exports = function(req, res, render) {

  req.models.athlete
  .findAll()
  .then(function(athletes) {
    render(athletes);
  })
  .catch(function(err) {
    render(err);
  });

};