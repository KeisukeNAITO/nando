'use strict';

const { logger } = require('../lib/logger');
const router = require('express').Router();

router.route('/')
    .get((req, res, next) => {
        logger.info(`[GET] API Access "/"`);
        res.status(200).send('read');
        next();
    });

module.exports = router;
