var controllers = require('./controllers/.index');
var actions = require('./actions/.index');

module.exports = function(app) {

  // Workout
  app.route('/workouts')
    .get(controllers.workout.list)
    .post(controllers.workout.add);
  app.route('/workouts/:workout_id')
    .options(function(req, res, next){
      res.status(200).end();
      next();
    })
    .get(controllers.workout.load)
    .put(controllers.workout.update)
    .delete(controllers.workout.remove);

  // Athlete
  app.route('/athletes')
    .get(controllers.athlete.list)
    .post(controllers.athlete.add);
  app.route('/athletes/:athlete_id')
    .get(controllers.athlete.load)
    .put(controllers.athlete.update)
    .delete(controllers.athlete.remove);

};
