'use strict';

const express = require('express');
const index = express();

index.use('/', require('./root'));

module.exports = index;
