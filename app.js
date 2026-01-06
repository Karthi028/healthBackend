const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('./utils/logger');
const authRouter = require('./router/authRouter');
const recordRouter = require('./router/recordRouter');


const app = express();

const corsOptions = {
    origin:'https://healthchek.netlify.app',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use(logger);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/health', recordRouter);

module.exports = app;