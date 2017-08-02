/**
 * Created by arpit on 7/17/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('MetricMapping', {
  Metric: {
    type: Sequelize.STRING
  },
  Drawable: {
    type: Sequelize.BOOLEAN
  },
  Format: {
    type: Sequelize.STRING
  },
  Heading: {
    type: Sequelize.STRING
  },
  SubHeading: {
    type: Sequelize.STRING
  },
  Caption: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true,
  defaultPrimaryKey: false,
  timestamps: false
});
