const http = require('http');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config({ path: '.env' });
const mongoose = require('./config/mongoose');
const response = require('./middleware/response');
//const routes = require('./routes/customer');
//const gRPCInit = require('./gRPC/server/index');

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(response);
app.use(express.urlencoded({ extended: true }));
const server = http.createServer(app);

//gRPCInit();
mongoose();
//app.use(routes);

module.exports = server;