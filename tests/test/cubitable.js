/**
 * Created by arpit on 7/10/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('cuinformation', {
  CU_NUMBER: {
    type: Sequelize.INTEGER
  },
  CYCLE_DATE: {
    type: Sequelize.STRING
  },
  JOIN_NUMBER: {
    type: Sequelize.INTEGER
  },
  SiteId: {
    type: Sequelize.INTEGER
  },
  CU_NAME: {
    type: Sequelize.STRING
  },
  SiteName: {
    type: Sequelize.STRING
  },
  SiteTypeName: {
    type: Sequelize.STRING
  },
  MainOffice: {
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
  PhysicalAddressPostalCode: {
    type: Sequelize.STRING
  },
  PhysicalAddressCountyName: {
    type: Sequelize.STRING
  },
  PhysicalAddressCountry: {
    type: Sequelize.STRING
  },
  MailingAddressLine1: {
    type: Sequelize.STRING
  },
  MailingAddressLine2: {
    type: Sequelize.STRING
  },
  MailingAddressCity: {
    type: Sequelize.STRING
  },
  MailingAddressStateCode: {
    type: Sequelize.STRING
  },
  MailingAddressStateName: {
    type: Sequelize.STRING
  },
  MailingAddressPostalCode: {
    type: Sequelize.STRING
  },
  PhoneNumber: {
    type: Sequelize.STRING
  }
});
