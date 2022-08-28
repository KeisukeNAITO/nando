'use strict';

const { logger } = require('../lib/logger');
const router = require('express').Router();

// Routing for /post/...
router.route('/')
    .post((req, res, next) => {
        logger.info(`[POST] API Access "/post"`);
        res.status(200).send('create /post');
        next();
    });

router.route('/:postId')
    .get((req, res, next) => {
        logger.info(`[GET] API Access "/post/{postId}"`);
        res.status(200).send('read /post/{postId}');
        next();
    });

module.exports = router;
