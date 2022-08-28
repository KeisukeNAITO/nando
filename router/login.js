'use strict';

const { logger } = require('../lib/logger');
const router = require('express').Router();

// Routing for /login/...
router.route('/')
    .post((req, res, next) => {
        logger.info(`[POST] API Access "/login"`);
        res.status(200).send('create /login');
        next();
    })
    .delete((req, res, next) => {
        logger.info(`[DELETE] API Access "/login"`);
        res.status(200).send('delete /login');
        next();
    });

module.exports = router;
