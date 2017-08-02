/**
 * Created by arpit on 7/7/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('Acct-DescGrant', {
  'Field Name': {
    type: Sequelize.STRING
  },

  Type: {
    type: Sequelize.STRING
  },

  Size: {
    type: Sequelize.DECIMAL
  },

  Description: {
    type: Sequelize.STRING
  }
});
