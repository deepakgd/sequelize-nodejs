// npm packages
const express = require('express'),
    moment = require('moment-timezone'),
    to = require('await-to-js').to,
    sequelize = require('sequelize');

// local handlers
const config = require('../../config'),
    models = require('../models'),
    userController = require('../controllers/user'),
    utils = require('../utils');


//express router
const router = express.Router()

//moment deprecation warnings
moment.suppressDeprecationWarnings = true

/**
 * /users - list users from database
 */
router.get('/users', async (req, res, next)=>{
  let [error, users] = await to(userController.getUsers());
  if(error) return utils.helper.handleError(res, error.status, error);
  return res.json({ data: users });
})

/**
 * /user/create - create user
 */
router.post('/user/create', async (req, res, next)=>{
  let [error, users] = await to(userController.createUser(req.body));
  if(error) return utils.helper.handleError(res, error.status, error);
  return res.json({ data: users });
})


router.post('/test/transactions', async (req, res, next)=>{
  let [error, users] = await to(userController.createUserAndAssiciateDepartment(req.body));
  if(error) return utils.helper.handleError(res, error.status, error);
  return res.json({ data: users });
})
module.exports = router

