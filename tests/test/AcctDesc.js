/**
 * Created by arpit on 7/7/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('AcctDesc', {
  Account: {
    type: Sequelize.STRING
  },

  AcctName: {
    type: Sequelize.STRING(300)
  },

  AcctDesc: {
    type: Sequelize.STRING(1500)
  },

  TableName: {
    type: Sequelize.STRING
  },

  Annualize: {
    type: Sequelize.INTEGER
  },

  CBSAccount: {
    type: Sequelize.INTEGER
  },

  FPRAccount: {
    type: Sequelize.INTEGER
  },

  STATAcctMain: {
    type: Sequelize.INTEGER
  },

  STATAcctState: {
    type: Sequelize.INTEGER
  },

  STATAcctGraph: {
    type: Sequelize.INTEGER
  },

  STATAcctTable8: {
    type: Sequelize.INTEGER
  }
});
