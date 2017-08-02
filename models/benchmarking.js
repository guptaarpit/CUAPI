/**
 * Created by arpit on 7/17/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('Product_Visual_Table_Benchmarking_201703', {
  Quarter: {
    type: Sequelize.STRING
  },
  CU_NUMBER: {
    type: Sequelize.STRING
  },
  Avg_Branches: {
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
  Avg_Employees: {
    type: Sequelize.FLOAT
  },
  Avg_LoantoShare: {
    type: Sequelize.FLOAT
  },
  Asset_Band: {
    type: Sequelize.STRING
  },
  n_Cus: {
    type: Sequelize.INTEGER
  },
  AssetRankby_State: {
    type: Sequelize.INTEGER
  },
  AssetRankby_Overall: {
    type: Sequelize.INTEGER
  },
  Avg_Assets: {
    type: Sequelize.FLOAT
  },
  Avg_loans: {
    type: Sequelize.FLOAT
  },
  Avg_Shares: {
    type: Sequelize.FLOAT
  },
  Avg_members: {
    type: Sequelize.FLOAT
  },
  TotalMembers: {
    type: Sequelize.FLOAT
  },
  GrowthInAssets: {
    type: Sequelize.FLOAT
  },
  GrowthInLoans: {
    type: Sequelize.FLOAT
  },
  GrowthInShares: {
    type: Sequelize.FLOAT
  },
  GrowthInMembers: {
    type: Sequelize.FLOAT
  },
  Avg_LoanPerMember: {
    type: Sequelize.FLOAT
  },
  Avg_SharePerMember: {
    type: Sequelize.FLOAT
  },
  Avg_Member_Relationship: {
    type: Sequelize.FLOAT
  },
  CreditCardPenetration: {
    type: Sequelize.FLOAT
  },
  NewVehicleLoanPenetration: {
    type: Sequelize.FLOAT
  },
  UsedVehicleLoanPenetration: {
    type: Sequelize.FLOAT
  },
  FirstMortgageLoanPenetration: {
    type: Sequelize.FLOAT
  },
  OtherREPenetration: {
    type: Sequelize.FLOAT
  },
  ShareDraftPenetration: {
    type: Sequelize.FLOAT
  },
  RegularSharesPenetration: {
    type: Sequelize.FLOAT
  },
  MoneyMarketSharesPenetration: {
    type: Sequelize.FLOAT
  },
  ShareCertificatePenetration: {
    type: Sequelize.FLOAT
  },
  $DelinquencyRate: {
    type: Sequelize.FLOAT
  },
  $Charge_offRate: {
    type: Sequelize.FLOAT
  }
}, {
  freezeTableName: true,
  defaultPrimaryKey: false,
  timestamps: false
});

