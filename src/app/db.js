const config = require('./config');
const { Sequelize } = require('sequelize');
const conection = new Sequelize(
    config.database,
    config.username,
    config.password,{
        host:config.host,
        dialect:'mysql'
    }
    
)
module.exports = conection;

