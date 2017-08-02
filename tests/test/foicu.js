/**
 * Created by arpit on 7/7/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('foicu', {
  CU_NUMBER: {
    type: Sequelize.INTEGER
  },
  CYCLE_DATE: {
    type: Sequelize.STRING
  },
  JOIN_NUMBER: {
    type: Sequelize.INTEGER
  },
  RSSD: {
    type: Sequelize.STRING
  },
  CU_TYPE: {
    type: Sequelize.INTEGER
  },
  CU_NAME: {
    type: Sequelize.STRING
  },
  CITY: {
    type: Sequelize.STRING
  },
  STATE: {
    type: Sequelize.STRING
  },
  CharterState: {
    type: Sequelize.STRING
  },
  STATE_CODE: {
    type: Sequelize.INTEGER
  },
  ZIP_CODE: {
    type: Sequelize.STRING
  },
  COUNTY_CODE: {
    type: Sequelize.INTEGER
  },
  CONG_DIST: {
    type: Sequelize.INTEGER
  },
  SMSA: {
    type: Sequelize.INTEGER
  },
  ATTENTION_OF: {
    type: Sequelize.STRING
  },
  STREET: {
    type: Sequelize.STRING
  },
  REGION: {
    type: Sequelize.STRING
  },
  SE: {
    type: Sequelize.STRING
  },
  DISTRICT: {
    type: Sequelize.INTEGER
  },
  YEAR_OPENED: {
    type: Sequelize.INTEGER
  },
  TOM_CODE: {
    type: Sequelize.STRING
  },
  LIMITED_INC: {
    type: Sequelize.INTEGER
  },
  ISSUE_DATE: {
    type: Sequelize.STRING
  },
  Peer_Group: {
    type: Sequelize.INTEGER
  },
  Quarter_Flag: {
    type: Sequelize.INTEGER
  }
});
