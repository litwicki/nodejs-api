
const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/health.controller');
const { authorize, ADMIN, LOGGED_USER } = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/ping')
  /**
   * @api {get} /ping Ping
   * @apiDescription Simple application health check
   * @apiVersion 1.0.0
   * @apiName Health - Simple
   * @apiGroup Health
   * @apiPermission public
   *
   * @apiSuccess {String}  message  Online|Offline
   *
   * @apiError (Bad Request 500)  Exception  OMG what's happening?!
   */
  .get(controller.ping);

router
  .route('/health')
  /**
   * @api {get} /health Health
   * @apiDescription Deep application health check
   * @apiVersion 1.0.0
   * @apiName Health - Deep
   * @apiGroup Health
   * @apiPermission public
   *
   * @apiSuccess {String}  message  A detailed message explaining the health of the application
   *
   * @apiError (Bad Request 500)  Exception  OMG what's happening?!
   */
  .get(authorize(), controller.health);

module.exports = router;
