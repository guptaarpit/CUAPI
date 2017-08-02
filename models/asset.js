/**
 * Created by arpit on 7/17/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('Product_Visual_Table_Asset_201703', {
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
  CashEquiv: {
    type: Sequelize.FLOAT
  },
  Investments: {
    type: Sequelize.FLOAT
  },
  LoansForSale: {
    type: Sequelize.FLOAT
  },
  TotalLoansLease: {
    type: Sequelize.FLOAT
  },
  LoanLossAlllowance: {
    type: Sequelize.FLOAT
  },
  TotalForeclosedRepossedAsset: {
    type: Sequelize.FLOAT
  },
  LandBuildingFixedAssets: {
    type: Sequelize.FLOAT
  },
  NCUAshareInsCapitalization: {
    type: Sequelize.FLOAT
  },
  TotalIntangibleAssets: {
    type: Sequelize.FLOAT
  },
  OtherAssets: {
    type: Sequelize.FLOAT
  }
}, {
  freezeTableName: true,
  defaultPrimaryKey: false,
  timestamps: false
});
