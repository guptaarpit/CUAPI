/**
 * Created by arpit on 7/17/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('Product_Visual_Table_RiskScorecard_201703', {
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
  AssetBand: {
    type: Sequelize.STRING
  },
  CreditRisk: {
    type: Sequelize.FLOAT
  },
  InterestRateRisk: {
    type: Sequelize.FLOAT
  },
  LiquidityRisk: {
    type: Sequelize.FLOAT
  },
  TransactionRisk: {
    type: Sequelize.FLOAT
  },
  StrategicRisk: {
    type: Sequelize.FLOAT
  },
  ReputationRisk: {
    type: Sequelize.FLOAT
  },
  ComplianceRisk: {
    type: Sequelize.FLOAT
  },
  NetChargeoff: {
    type: Sequelize.FLOAT
  },
  cumDistCR: {
    type: Sequelize.FLOAT
  },
  cumDistIRR: {
    type: Sequelize.FLOAT
  },
  cumDistLR: {
    type: Sequelize.FLOAT
  },
  cumDistTR: {
    type: Sequelize.FLOAT
  },
  cumDistSR: {
    type: Sequelize.FLOAT
  },
  cumDistRR: {
    type: Sequelize.FLOAT
  },
  cumDistCompR: {
    type: Sequelize.FLOAT
  },
  cumDistCRState: {
    type: Sequelize.FLOAT
  },
  cumDistIRRState: {
    type: Sequelize.FLOAT
  },
  cumDistLRState: {
    type: Sequelize.FLOAT
  },
  cumDistTRState: {
    type: Sequelize.FLOAT
  },
  cumDistSRState: {
    type: Sequelize.FLOAT
  },
  cumDistRRState: {
    type: Sequelize.FLOAT
  },
  cumDistCompRState: {
    type: Sequelize.FLOAT
  },
  cumDistNCState: {
    type: Sequelize.FLOAT
  },
  OverallScore: {
    type: Sequelize.FLOAT
  },
  StateScore: {
    type: Sequelize.FLOAT
  },
  OverallRank: {
    type: Sequelize.BIGINT
  },
  StateRank: {
    type: Sequelize.BIGINT
  }
}, {
  freezeTableName: true,
  defaultPrimaryKey: false,
  timestamps: false
});
