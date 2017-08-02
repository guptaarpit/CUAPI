/**
 * Created by arpit on 7/31/2017.
 */

let modals;
let sequelize;

class BenchMarkController {
  constructor(modal) {
    sequelize = modal.tediousSequelize;
    modals = modal;
  }

  static retrieveOtherCUBenchMarkData(req, res, next) {
    const benchMarkFilters = Promise.all([
      modals
          .Product_Visual_Table_Benchmarking_201703
          .findAll({
            where: { CU_NUMBER: req.params.cunumber },
            order: [['Quarter', 'DESC']]
          })
    ]);

    benchMarkFilters.then((results) => {
      res.send({
        OtherCuData: results[0]
      });
      return next();
    }).catch(err => next(err));
  }

  static retrieveStateWiseBenchMarkData(req, res, next) {
    const benchMarkFilters = Promise.all([
      modals
          .Product_Visual_Table_Benchmarking_201703
          .findAll({
            where: {
              STATE: req.params.state,
              cuNumber: {
                ne: req.query.cunumber
              }
            },
            order: [['Quarter', 'DESC']]
          })
    ]);

    benchMarkFilters.then((results) => {
      let data;
      const stateWiseCUData = results[0].map((item) => {
        const stateData = [];
        if (item.Quarter === data.Quarter) {
          data.cuCount += 1;
          data.Avg_Employees += item.Avg_Employees;
          data.Avg_LoantoShare += item.Avg_LoantoShare;
          data.AssetRankby_State += item.AssetRankby_State;
          data.AssetRankby_Overall += item.AssetRankby_Overall;
          data.Avg_Assets += item.Avg_Assets;
          data.Avg_loans += item.Avg_loans;
          data.Avg_Shares += item.Avg_Shares;
          data.Avg_members += item.Avg_members;
          data.TotalMembers += item.TotalMembers;
          data.GrowthInAssets += item.GrowthInAssets;
          data.GrowthInLoans += item.GrowthInLoans;
          data.GrowthInShares += item.GrowthInShares;
          data.GrowthInMembers += item.GrowthInMembers;
          data.Avg_LoanPerMember += item.Avg_LoanPerMember;
          data.Avg_SharePerMember += item.Avg_SharePerMember;
          data.Avg_Member_Relationship += item.Avg_Member_Relationship;
          data.CreditCardPenetration += item.CreditCardPenetration;
          data.NewVehicleLoanPenetration += item.NewVehicleLoanPenetration;
          data.UsedVehicleLoanPenetration += item.UsedVehicleLoanPenetration;
          data.FirstMortgageLoanPenetration += item.FirstMortgageLoanPenetration;
          data.OtherREPenetration += item.OtherREPenetration;
          data.ShareDraftPenetration += item.ShareDraftPenetration;
          data.RegularSharesPenetration += item.RegularSharesPenetration;
          data.MoneyMarketSharesPenetration += item.MoneyMarketSharesPenetration;
          data.ShareCertificatePenetration += item.ShareCertificatePenetration;
          data.$DelinquencyRate += item.$DelinquencyRate;
          data.$Charge_offRate += item.$Charge_offRate;
        } else {
          if (data) {
            stateData.push(data);
          }
          data = {
            cuCount: item.cuCount,
            Quarter: item.Quarter,
            STATE: item.STATE,
            Asset_Band: item.Asset_Band,
            Avg_Employees: item.Avg_Employees,
            Avg_LoantoShare: item.Avg_LoantoShare,
            AssetRankby_State: item.AssetRankby_State,
            AssetRankby_Overall: item.AssetRankby_Overall,
            Avg_Assets: item.Avg_Assets,
            Avg_loans: item.Avg_loans,
            Avg_Shares: item.Avg_Shares,
            Avg_members: item.Avg_members,
            TotalMembers: item.TotalMembers,
            GrowthInAssets: item.GrowthInAssets,
            GrowthInLoans: item.GrowthInLoans,
            GrowthInShares: item.GrowthInShares,
            GrowthInMembers: item.GrowthInMembers,
            Avg_LoanPerMember: item.Avg_LoanPerMember,
            Avg_SharePerMember: item.Avg_SharePerMember,
            Avg_Member_Relationship: item.Avg_Member_Relationship,
            CreditCardPenetration: item.CreditCardPenetration,
            NewVehicleLoanPenetration: item.NewVehicleLoanPenetration,
            UsedVehicleLoanPenetration: item.UsedVehicleLoanPenetration,
            FirstMortgageLoanPenetration: item.FirstMortgageLoanPenetration,
            OtherREPenetration: item.OtherREPenetration,
            ShareDraftPenetration: item.ShareDraftPenetration,
            RegularSharesPenetration: item.RegularSharesPenetration,
            MoneyMarketSharesPenetration: 0,
            ShareCertificatePenetration: 0,
            $DelinquencyRate: 0,
            $Charge_offRate: 0
          };
        }

        return stateData;
      });
      res.send({
        StateWiseCUData: stateWiseCUData
      });
      return next();
    }).catch(err => next(err));
  }

  static retrieveBenchMarkData(req, res, next) {
    const seqQuery = `exec EXL_Benchmark_Avg '${req.query.state}',${req.query.isstate},'${req.query.minassetband}','${req.query.maxassetband}',${req.query.isassetband}`;
    sequelize.query(seqQuery).then((result) => {
      res.send({
        CUData: result[0]
      });
      return next();
    }).catch(err => next(err));
  }

}

module.exports = BenchMarkController;
