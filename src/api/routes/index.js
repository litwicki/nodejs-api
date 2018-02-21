
const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/index.controller');
const { authorize, ADMIN, LOGGED_USER } = require('../middlewares/auth');

const router = express.Router();

router
  .route('/')
  /**
   * @api {get} / Home
   * @apiDescription API Home Page
   * @apiVersion 1.0.0
   * @apiName Home - Simple home page
   * @apiGroup Home
   * @apiPermission public
   *
   * @apiError (Bad Request 500)  Exception  OMG what's happening?!
   */
  .get(controller.index);

module.exports = router;
