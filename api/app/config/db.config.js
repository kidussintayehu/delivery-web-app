require('dotenv').config();

module.exports = {
    USER:process.env.USER,
    HOST:process.env.HOST,
    PORT:process.env.DATABASEPORT,
    PASSWORD:process.env.PASSWORD,
    DB:process.env.DATABASE
};