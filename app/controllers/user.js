const to = require('await-to-js').to;

const models = require('../models'),
    utils = require('../utils');


module.exports = {
    /**
     * getUsers - get all user from database
     */
    getUsers: function(){
        return new Promise(async (resolve, reject)=>{
            let [error, users] = await to(models.users.findAll({}));
            if(error) return reject({ status: 500, error: error });
            resolve(users);
        })
    },
    /**
     * createUser - create user in database and add department
     * @param {OBJECT} body - contains user detail and department detail
     */
    createUser: function(body){
        return new Promise(async (resolve, reject)=>{
            if(!body.password || !body.email) return reject({ status: 400, error: "Email and Password required"});
            
            // let [error, user] = await to(models.users.create({

            // }))
        })
    }
}