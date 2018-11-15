require('dotenv').config()
const express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path');

const config = require('./config'),
    helper = require('./app/utils/helper');

global.appRoot = path.resolve(__dirname);

const app = express()

const modelAssociations = require('./app/modelAssociations')
modelAssociations()

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))

app.use('/api', require('./app/router/api'));

app.get('/', function(req, res, next){
  return res.send('Server runnning');
})

app.listen(3000, () => console.log('app listening on port 3000!'))