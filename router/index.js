'use strict';

const express = require('express');
const index = express();

index.use('/', require('./root'));
index.use('/login', require('./login'));
index.use('/user', require('./user'));
index.use('/post', require('./post'));

module.exports = index;
