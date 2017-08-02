/**
 * Created by arpit on 7/11/2017.
 */
/**
 * Created by arpit on 7/7/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('cunames', {
  name: {
    type: Sequelize.STRING
  },
  cuNumber: {
    type: Sequelize.INTEGER
  }
});
