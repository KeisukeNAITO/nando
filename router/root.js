'use strict';

const { logger } = require('../lib/logger');
const router = require('express').Router();

router.route('/')
    .get((req, res, next) => {
        logger.info('[GET] API Access "/"');
        res.status(200).send('read');
        next();
    })
    .post((req, res, next) => {
        logger.info('[POST] API Access "/"');
        res.status(200).send('create');
        next();
    })
    .put((req, res, next) => {
        logger.info('[PUT] API Access "/"');
        res.status(200).send('update');
        next();
    })
    .delete((req, res, next) => {
        logger.info('[DELETE] API Access "/"');
        res.status(200).send('delete');
        next();
    });

module.exports = router;
