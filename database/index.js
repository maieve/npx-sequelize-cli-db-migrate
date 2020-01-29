const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const connection = new Sequelize(
    config.database, config.username, config.password, config,
);
const User = require('../models/User');
const Address = require('../models/Address');

User.init(connection);
Address.init(connection);

User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;