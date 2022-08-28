'use strict';

const { logger } = require('../lib/logger');
const router = require('express').Router();

// Routing for /user/...
router.route('/:userId')
    .get((req, res, next) => {
        logger.info(`[GET] API Access "/user/${req.params.userId}"`);
        res.status(200).send('read /users/{userId}');
        next();
    })
    .delete((req, res, next) => {
        logger.info(`[DELETE] API Access "/user/${req.params.userId}"`);
        res.status(200).send('create /users');
        next();
    });

router.route('/:userId/posts')
    .get((req, res, next) => {
        console.log(req.params);
        logger.info(`[GET] API Access "/user/${req.params.userId}/post"`);
        res.status(200).send('read /users/{userId}/posts');
        next();
    });

module.exports = router;
