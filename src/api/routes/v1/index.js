const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const router = express.Router();

const healthController = require('../../controllers/health.controller');

/**
 * GET health checks
 */
router.get('/ping', (req, res) => res.send('OK'));
router.get('/health', healthController.health);

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
