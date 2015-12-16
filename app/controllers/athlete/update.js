module.exports = function(req, res, render) {

  req.models.athlete.find({
    where: {
      id: req.params.athlete_id
    }
  })
  .then(function(athlete) {
    athlete.firstname = req.body.athlete.firstname;
    athlete.lastname = req.body.athlete.lastname;
    athlete.gender = req.body.athlete.gender;
    athlete.updatedAt = new Date().getTime();
    /*
     * Set new values like this:
     * athlete.some_field_name = req.body.athlete.someFieldName;
     */

    return athlete.save();
  })
  .then(function(athlete) {
    render(athlete);
  })
  .catch(function(err) {
    render(err);
  });

};
