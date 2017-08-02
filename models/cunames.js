/**
 * Created by arpit on 7/31/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('cunames', {
  name: {
    type: Sequelize.STRING
  },
  cuNumber: {
    type: Sequelize.STRING
  },
  STATE: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true,
  defaultPrimaryKey: false,
  timestamps: false
});

