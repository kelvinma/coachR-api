'use strict';

var ssaclAttributeRoles = require('ssacl-attribute-roles');

module.exports = function(sequelize, DataTypes) {
  var Athlete = sequelize.define('athletes', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING

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
        models.athlete.hasMany(models.workout);
      }
    },

    underscored: true,
    underscoredAll: true

    /* Find more configurations at:
     * http://docs.sequelizejs.com/en/latest/docs/models-definition/#configuration
     */
  });

  ssaclAttributeRoles(Athlete);

  return Athlete;
};
