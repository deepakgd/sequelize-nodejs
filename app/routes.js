// npm packages
const express = require('express'),
    moment = require('moment-timezone'),
    to = require('await-to-js').to,
    sequelize = require('sequelize');

// local handlers
const config = require('./config'),
    models = require('./models');


//express router
const router = express.Router()

//moment deprecation warnings
moment.suppressDeprecationWarnings = true

function handleError(res, error) {
  console.log(error)
  return res.status(500).json(error)
}


router.get('/users', async (req, res, next)=>{
  let [error, users] = await to(models.users.findAll({}));
  if(error) return res.status(500).json({ error: error });
  return res.json({ data: users });
})

module.exports = router

