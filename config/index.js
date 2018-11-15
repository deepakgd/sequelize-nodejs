const env = process.env.NODE_ENV
let config = {
  env,
}

config.dbname = process.env.DB_DATABASE
config.dbUserName = process.env.DB_USERNAME
config.dbPassword = process.env.DB_PASSWORD
config.dbHost = process.env.DB_HOST
config.dbPort = process.env.DB_PORT
config.timezone = 'Asia/Kolkata'


switch (env) {
  case 'preproduction':
    config.defaultPage = '';
  break;
  case 'production':
    config.defaultPage = "";
    break;

  case 'staging':
    config.defaultPage = '';
    break;


  case 'development':
      config.defaultPage = '';
    break;

  default:
    config.defaultPage = '';
    break
}


module.exports = config
