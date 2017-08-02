/**
 * Created by arpit on 7/17/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('Product_Visual_Table_Liability_201703', {
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
  TotalShareDeposits: {
    type: Sequelize.FLOAT
  },
  SupplementalShareDeposit: {
    type: Sequelize.FLOAT
  },
  Equity: {
    type: Sequelize.FLOAT
  },
  TotalUninsuredMemberShareDeposit: {
    type: Sequelize.FLOAT
  },
  TotalUninsuredNonMemberShareDeposit: {
    type: Sequelize.FLOAT
  },
  TotalUninsuredShareDeposit: {
    type: Sequelize.FLOAT
  },
  TotalInsuredShareDeposit: {
    type: Sequelize.FLOAT
  }
}, {
  freezeTableName: true,
  defaultPrimaryKey: false,
  timestamps: false
});
