const express = require('express');
const router = require('./routes/reviewRoutes');
const cors = require('cors');
const helmet = require('helmet');
const {dbCon} = require('./db/connection');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbCon;

app.use('/api',router);

module.exports = app;

