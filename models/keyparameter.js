/**
 * Created by arpit on 7/17/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('Product_Visual_Table_Keyparameters_201703', {
  Quarter: {
    type: Sequelize.STRING
  },
  cuNumber: {
    type: Sequelize.STRING
  },
  joinNumber: {
    type: Sequelize.STRING
  },
  cuName: {
    type: Sequelize.STRING
  },
  City: {
    type: Sequelize.STRING
  },
  stateName: {
    type: Sequelize.STRING
  },
  County: {
    type: Sequelize.STRING
  },
  Group: {
    type: Sequelize.INTEGER
  },
  Band: {
    type: Sequelize.INTEGER
  },
  n_Cus: {
    type: Sequelize.INTEGER
  },
  TotalMembers: {
    type: Sequelize.FLOAT
  },
  TotalAssets: {
    type: Sequelize.FLOAT
  },
  ATMs: {
    type: Sequelize.INTEGER
  },
  Branches: {
    type: Sequelize.INTEGER
  },
  GrowthInAssets: {
    type: Sequelize.FLOAT
  },
  Equity: {
    type: Sequelize.FLOAT
  },
  DebttoEquity: {
    type: Sequelize.FLOAT
  },
  ReturnOnEquity: {
    type: Sequelize.FLOAT
  },
  TotalShareDeposits: {
    type: Sequelize.FLOAT
  },
  TotalLoansLease: {
    type: Sequelize.FLOAT
  },
  NetIncome: {
    type: Sequelize.FLOAT
  },
  GrowthInSavingsDeposit: {
    type: Sequelize.FLOAT
  },
  GrowthInLoans: {
    type: Sequelize.FLOAT
  },
  GrowthInMembers: {
    type: Sequelize.FLOAT
  }
}, {
  freezeTableName: true,
  defaultPrimaryKey: false,
  timestamps: false
});
