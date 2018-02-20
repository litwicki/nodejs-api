const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const healthRoutes = require('./health.route');

const router = express.Router();

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/auth', authRoutes);
router.use('/', healthRoutes);
router.use('/users', userRoutes);

module.exports = router;
