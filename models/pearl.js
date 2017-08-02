/**
 * Created by arpit on 7/17/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('Product_Visual_Table_Pearls_201703', {
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
  LoanLossAllowanceByAllowanceForLoansDelqGt12: {
    type: Sequelize.FLOAT
  },
  LoanLossAllowanceByAllowanceForLoansDelqLt12: {
    type: Sequelize.FLOAT
  },
  LoanChargeOffByTotalLoanPortfolio: {
    type: Sequelize.FLOAT
  },
  RecoveryByChargeoff: {
    type: Sequelize.FLOAT
  },
  Solvency: {
    type: Sequelize.FLOAT
  },
  NetLoansByTotalAssets: {
    type: Sequelize.FLOAT
  },
  LiquidInvestemntByTotalAssets: {
    type: Sequelize.FLOAT
  },
  LongTermInvestmentByTotalAsssets: {
    type: Sequelize.FLOAT
  },
  SavingsDepositByTotalAssets: {
    type: Sequelize.FLOAT
  },
  MemberSharesByTotalAssets: {
    type: Sequelize.FLOAT
  },
  TotalLoanDelqByTotalLoanPortfolio: {
    type: Sequelize.FLOAT
  },
  NonEarningAssetsByTotalAssets: {
    type: Sequelize.FLOAT
  },
  TotalLoanIncomeByAvgLoans: {
    type: Sequelize.FLOAT
  },
  FinancialInvestmentIncomeByInvestments: {
    type: Sequelize.FLOAT
  },
  OperatingExpenseByTotalAssets: {
    type: Sequelize.FLOAT
  },
  ProvisionsForLoanLossByAvgAssets: {
    type: Sequelize.FLOAT
  },
  NonRecurringIncExpByAvgAssets: {
    type: Sequelize.STRING
  },
  NetIncomeByAvgAssets: {
    type: Sequelize.STRING
  },
  LiquidityReservesBySavingsDeposits: {
    type: Sequelize.FLOAT
  },
  GrowthInLoans: {
    type: Sequelize.FLOAT
  },
  GrowthInInvestment: {
    type: Sequelize.FLOAT
  },
  GrowthInSavingsDeposit: {
    type: Sequelize.FLOAT
  },
  GrowthInMemberShares: {
    type: Sequelize.FLOAT
  },
  GrowthInMembers: {
    type: Sequelize.FLOAT
  },
  GrowthInAssets: {
    type: Sequelize.FLOAT
  }
}, {
  freezeTableName: true,
  defaultPrimaryKey: false,
  timestamps: false
});
