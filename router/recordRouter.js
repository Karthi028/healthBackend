const express = require('express');
const { isAuthenticated } = require('../middleware/authmiddleware');
const { addRecord, getPatientRecords } = require('../controllers/recordController');

const recordRouter = express.Router();

recordRouter.post('/records',isAuthenticated,addRecord)
recordRouter.get('/records',isAuthenticated,getPatientRecords)

module.exports = recordRouter;