/**
 * Created by arpit on 6/30/2017.
 */

module.exports = (sequelize, Sequelize) => sequelize.define('users', {
  name: {
    type: Sequelize.STRING,
    notEmpty: false
  },

  gender: {
    type: Sequelize.ENUM('male', 'female'),
    defaultValue: 'male'
  },

  location: {
    type: Sequelize.STRING
  },

  designation: {
    type: Sequelize.STRING
  },

  organization: {
    type: Sequelize.STRING
  },

  website: {
    type: Sequelize.STRING
  },

  accessLevel: {
    type: Sequelize.ENUM('user', 'free', 'premium'),
    defaultValue: 'user'
  },

  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

  createdAt: {
    type: Sequelize.DATE(6),
    defaultValue: Sequelize.NOW
  },

  status: {
    type: Sequelize.ENUM('active', 'inactive'),
    defaultValue: 'active'
  },
  passwordResetToken: {
    type: Sequelize.STRING
  },
  passwordResetExpires: {
    type: Sequelize.STRING
  },
  tokens: {
    type: Sequelize.STRING
  },
  expiresIn: {
    type: Sequelize.BIGINT
  }
}, {
  freezeTableName: true
});
