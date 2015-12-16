'use strict';

var ssaclAttributeRoles = require('ssacl-attribute-roles');

module.exports = function(sequelize, DataTypes) {
  var Workout = sequelize.define('workouts', {
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    type: DataTypes.STRING,
    duration: DataTypes.FLOAT,
    distance: DataTypes.FLOAT,
    notes: DataTypes.TEXT
  }, {
    getterMethods: {
      /*
       * Set pseudo properties
       * These will not be stored in the table, but rendered in the JSON response
       * Example:
       * username_uppercased: function() { return this.getDataValue('username').toUpperCase(); }
       */
    },

    classMethods: {
      associate: function(models) {
        models.workout.belongsTo(models.athlete);
        /*
         * Define relationships with other models
         * Example:
         * models.user.hasOne(models.project);
         */
      }
    },

    underscored: true,
    underscoredAll: true

    /* Find more configurations at:
     * http://docs.sequelizejs.com/en/latest/docs/models-definition/#configuration
     */
  });

  ssaclAttributeRoles(Workout);

  return Workout;
};
