/**
 * Created by arpit on 6/30/2017.
 */

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/main');

const sequelize = new Sequelize(
  config.database.database,
  config.database.username,
  config.database.password,
  config.database
);
const tediousSequelize = new Sequelize(
  config.msSQLDatabase.database,
  config.msSQLDatabase.username,
  config.msSQLDatabase.password,
  config.msSQLDatabase
);
const db = {};

fs.readdirSync(__dirname).filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js')).forEach((file) => {
  const model = tediousSequelize.import(path.join(__dirname, file));
  model.removeAttribute('id');
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.tediousSequelize = tediousSequelize;

module.exports = db;
