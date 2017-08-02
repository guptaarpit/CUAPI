/**
 * Created by arpit on 7/7/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('ATM', {
  CU_NUMBER: {
    type: Sequelize.STRING
  },
  CYCLE_DATE: {
    type: Sequelize.STRING
  },
  JOIN_NUMBER: {
    type: Sequelize.DECIMAL
  },
  CU_NAME: {
    type: Sequelize.STRING
  },
  SiteId: {
    type: Sequelize.DECIMAL
  },
  SiteName: {
    type: Sequelize.STRING
  },
  SiteTypeName: {
    type: Sequelize.STRING
  },
  SiteFunctionName: {
    type: Sequelize.STRING
  },
  PhysicalAddressLine1: {
    type: Sequelize.STRING
  },
  PhysicalAddressLine2: {
    type: Sequelize.STRING
  },
  PhysicalAddressCity: {
    type: Sequelize.STRING
  },
  PhysicalAddressStateCode: {
    type: Sequelize.STRING
  },
  PhysicalAddressStateName: {
    type: Sequelize.STRING
  },
  PhysicalAddressPostalCode: {
    type: Sequelize.STRING
  },
  PhysicalAddressCountyName: {
    type: Sequelize.STRING
  },
  PhysicalAddressCountry: {
    type: Sequelize.STRING
  }
});
