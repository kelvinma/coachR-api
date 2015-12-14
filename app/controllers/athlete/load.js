module.exports = function(req, res, render) {

  req.models.athlete.find({
    where: {
      id: req.params.athlete_id 
    }
  })
  .then(function(athlete) {
    render({
      model: athlete
    });
  })
  .catch(function(err) {
    render(err);
  });

};