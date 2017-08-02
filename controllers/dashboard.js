/**
 * Created by arpit on 7/3/2017.
 */
let sequelize;
let modals;

class DashboardController {
  constructor(modal) {
    sequelize = modal.tediousSequelize;
    modals = modal;
  }

  static retrieveCuList(req, res, next) {
    sequelize.query('select * from [cunames]').then((cuData) => {
      res.send(cuData[0]);
      return next();
    });
  }

  static retrieveDashboardData(req, res, next) {
    const selectionFilter = [
      modals
          .cunames
          .aggregate('STATE', 'DISTINCT', { plain: false, order: [['STATE']] }),
      modals
          .Product_Visual_Table_Benchmarking_201703
          .aggregate('Asset_Band', 'DISTINCT', { plain: false }),
      modals
          .Product_Visual_Table_Benchmarking_201703
          .aggregate('Quarter', 'DISTINCT', { plain: false, where: { CU_NUMBER: req.query.cunumber }, order: [['Quarter', 'DESC']] }),
      modals
          .cunames
          .findAll({
            where: { cuNumber: {
              ne: req.query.cunumber
            } },
            order: [['name']]
          }),
      modals
            .Product_Visual_Table_Keyparameters_201703
            .aggregate('TotalAssets', 'max', {})
    ];
    const dataFilters = req.query.cunumber ? Promise.all([modals
        .Product_Visual_Table_Asset_201703.findAll({
          where: { cuNumber: req.query.cunumber },
          order: [['Quarter', 'DESC']]
        }),
      modals
          .Product_Visual_Table_Keyparameters_201703
          .findAll({
            where: { cuNumber: req.query.cunumber },
            order: [['Quarter', 'DESC']]
          }),
      modals.assetbandstatepercentile.findAll({
        where: { cuNumber: req.query.cunumber },
        order: [['Quarter', 'DESC']]
      }),
      modals
          .Product_Visual_Table_CAMELS_201703
          .findAll({
            where: { cuNumber: req.query.cunumber },
            order: [['Quarter', 'DESC']]
          }),
      modals
          .Product_Visual_Table_Liability_201703
          .findAll({
            where: { cuNumber: req.query.cunumber },
            order: [['Quarter', 'DESC']]
          }),
      modals
          .Product_Visual_Table_Pearls_201703
          .findAll({
            where: { cuNumber: req.query.cunumber },
            order: [['Quarter', 'DESC']]
          }),
      modals
          .Product_Visual_Table_IncomeExpense_201703
          .findAll({
            where: { cuNumber: req.query.cunumber },
            order: [['Quarter', 'DESC']]
          }),
      modals
          .Product_Visual_Table_Benchmarking_201703
          .findAll({
            where: { CU_NUMBER: req.query.cunumber },
            order: [['Quarter', 'DESC']]
          }),
      ...selectionFilter
    ]) :
        Promise.all(selectionFilter).then(result => res.send({
          Assets: [],
          KeyParameters: [],
          AssetBandStatePercentile: [],
          Camels: [],
          Liabilities: [],
          Pearls: [],
          IncomeExpenses: [],
          BenchMarks: [],
          StateFilter: result[0].map(item => item.DISTINCT),
          AssetBandFilter: result[1].map(item => item.DISTINCT),
          QuarterFilter: result[2].map(item => item.DISTINCT),
          CUFilter: result[3],
          maxAssetBand: result[4]
        }));
    dataFilters.then((results) => {
      res.send({
        Assets: results[0],
        KeyParameters: results[1],
        AssetBandStatePercentile: results[2],
        Camels: results[3],
        Liabilities: results[4],
        Pearls: results[5],
        IncomeExpenses: results[6],
        BenchMarks: results[7],
        StateFilter: results[8].map(item => item.DISTINCT),
        AssetBandFilter: results[9].map(item => item.DISTINCT),
        QuarterFilter: results[10].map(item => item.DISTINCT),
        CUFilter: results[11],
        maxAssetBand: results[12]
      });
      return next();
    }).catch(err => next(err));
  }

  static retrieveMetrics(req, res, next) {
    modals.MetricMapping.findAll().then((metrics) => {
      res.send(metrics);
      return next();
    }).catch(err => next(err));
  }

}

module.exports = DashboardController;
