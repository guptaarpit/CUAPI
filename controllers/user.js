/**
 * Created by arpit on 7/3/2017.
 */
const bCrypt = require('bcrypt-nodejs');
// const fs = require('fs');
const authentication = require('./authentication');
const roles = require('../constants');

let userModel;
let sequelize;

function isValidPassword(userpass, passwordValue) {
  return bCrypt.compareSync(passwordValue, userpass);
}

class UserController {
  constructor(user, modal) {
    this.User = user;
    userModel = user;
    sequelize = modal;
  }

  static viewProfile(req, res, next) {

  }

  static register(req, res, next) {
    const userItem = {
      email: req.body.email,
      name: req.body.name,
      password: bCrypt.hashSync(req.body.password, bCrypt.genSaltSync(8), null),
      gender: req.body.gender ? req.body.gender : 'male',
      location: req.body.location,
      designation: req.body.designation,
      organization: req.body.organization,
      website: req.body.website,
      accessLevel: req.body.accessLevel ? req.body.accessLevel : roles.ROLE_MEMBER
    };
    userModel.create(userItem).then((newUser) => {
      res.writeHead(201, {
        authorization: `bearer ${authentication.generateToken(newUser)}`
      });
      res.end();
      return next();
    }).catch(next);
  }

  static login(req, res, next) {
    const error = new Error();
    userModel.findOne({ where: { email: req.body.email } }).then((userItem) => {
      if (!userItem) {
        error.status = 404;
        error.message = 'Email does not exist';
        return next(error);
      }

      if (!isValidPassword(userItem.password, req.body.password)) {
        error.status = 401;
        error.message = 'Incorrect password.';
        return next(error);
      }
      let tokenDetail = userItem;
      if (!authentication.validateToken(userItem.expiresIn)) {
        tokenDetail = authentication.generateToken(userItem);
      }

      res.writeHead(201, {
        authorization: `bearer ${tokenDetail.tokens}`,
        expiresIn: tokenDetail.expiresIn
      });
      res.end();
      return next();
    }).catch((err) => {
      error.status = 401;
      error.message = 'Something went wrong, please try again.';
      error.raw = err;
      return next(error);
    });
  }

  static uploadData(req, res, next) {
    const queryStr = `LOAD DATA LOCAL INFILE '${req.files[0].destination + req.files[0].filename}' INTO TABLE \`${req.params.tableName}\` FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\\r\\n'  IGNORE 1 LINES`;
    sequelize.query(queryStr).then((result) => {
      res.status(201).send(result);
      return next();
    }).catch(err => next(err));
  }

  static executeQuery(req, res, next) {
    const queryStr = req.body.queryString;
    sequelize.query(queryStr).then((result) => {
      res.status(201).send(result[0]);
      return next();
    }).catch(err => next(err));
  }

  static forgotPassword(req, res, next) {

  }

  static verifyToken(req, res, next) {

  }
}

module.exports = UserController;
