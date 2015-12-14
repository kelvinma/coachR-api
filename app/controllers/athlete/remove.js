module.exports = function(req, res, render) {

  req.models.athlete.find({
    where: {
      id: req.params.athlete_id 
    } 
  })
  .then(function(athlete) {
    return athlete.destroy();
  })
  .then(function() {
    res.json({});
  })
  .catch(function(err) {
    render(err);
  });

};