const dotenv = require('dotenv').config()

PORT = process.env.PORT;
MONGODB = process.env.MONGODB
JWT_SECRET = process.env.JWT_SECRET
STAGE = process.env.STAGE

module.exports = {
    PORT,
    MONGODB,
    JWT_SECRET,
    STAGE
}