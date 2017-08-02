/**
 * Created by arpit on 7/25/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('assetbandstatepercentile', {
  Quarter: {
    type: Sequelize.STRING
  },
  cuNumber: {
    type: Sequelize.STRING
  },
  joinNumber: {
    type: Sequelize.STRING
  },
  stateName: {
    type: Sequelize.STRING
  },
  Asset_Band: {
    type: Sequelize.STRING
  },
  AssetGrowth_statepercentile: {
    type: Sequelize.FLOAT
  },
  AssetGrowth_assetbandpercentile: {
    type: Sequelize.FLOAT
  },
  LoanGrowth_statepercentile: {
    type: Sequelize.FLOAT
  },
  LoanGrowth_assetbandpercentile: {
    type: Sequelize.FLOAT
  },
  MemberGrowth_statepercentile: {
    type: Sequelize.FLOAT
  },
  MemberGrowth_assetbandpercentile: {
    type: Sequelize.FLOAT
  },
  ROA_statepercentile: {
    type: Sequelize.FLOAT
  },
  ROA_assetbandpercentile: {
    type: Sequelize.FLOAT
  },
  ROE_statepercentile: {
    type: Sequelize.FLOAT
  },
  ROE_assetbandpercentile: {
    type: Sequelize.FLOAT
  }
}, {
  freezeTableName: true,
  defaultPrimaryKey: false,
  timestamps: false
});
