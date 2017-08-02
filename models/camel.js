/**
 * Created by arpit on 7/17/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('Product_Visual_Table_CAMELS_201703', {
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
  DebttoEquity: {
    type: Sequelize.FLOAT
  },
  TotalAdvancetoTotalAsset: {
    type: Sequelize.FLOAT
  },
  GrossNPARatio: {
    type: Sequelize.FLOAT
  },
  NetNPARatio: {
    type: Sequelize.FLOAT
  },
  TotalInvestmenttoTotalAssets: {
    type: Sequelize.FLOAT
  },
  TotalAdvancetoDepositRatio: {
    type: Sequelize.FLOAT
  },
  BusinessperEmployee: {
    type: Sequelize.FLOAT
  },
  ProfitperEmployee: {
    type: Sequelize.FLOAT
  },
  ReturnOnEquity: {
    type: Sequelize.FLOAT
  },
  ReturnOnAssets: {
    type: Sequelize.FLOAT
  },
  NetInterestbyEarningAssets: {
    type: Sequelize.FLOAT
  },
  NonInterestbyEarningAssets: {
    type: Sequelize.FLOAT
  },
  OperatingExpbyEarningAssets: {
    type: Sequelize.FLOAT
  },
  InterestIncometoTotalIncome: {
    type: Sequelize.FLOAT
  },
  NonInteretIncometoTotalIncome: {
    type: Sequelize.FLOAT
  },
  LiquidAssettoTotalAsset: {
    type: Sequelize.FLOAT
  },
  LiquidAssettoDemandDeposit: {
    type: Sequelize.FLOAT
  },
  LoanLossCoverageRatio: {
    type: Sequelize.FLOAT
  }
}, {
  freezeTableName: true,
  defaultPrimaryKey: false,
  timestamps: false
});
