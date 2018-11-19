const to = require('await-to-js').to,
    sequelize = require('sequelize');

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
            let [error, passwordHash] = await to(utils.helper.generatePassword(body.password));
            if(error) return reject(error);
            let [err, user] = await to(models.users.create({
                first_name: body.first_name || "",
                last_name: body.last_name || "",
                name: body.name || "",
                email: body.email || "",
                password: passwordHash,
                phone: body.phone
            }));
            if(err) return reject(err);
            resolve({ message: "User created successfully" });
        })
    },
    /**
     * createUserAndAssiciateDepartment - create user and associate user with department - IMPORTANT transaction implemented without user await-to-js
     * @param {OBJECT} body - contains payload
     */
    createUserAndAssiciateDepartment: function(body){
        return new Promise(async (resolve, reject)=>{
            let transaction;
            try{
                let passwordHash = await utils.helper.generatePassword(body.password);
                transaction = await models.sequelize.transaction();
                let user = await models.users.create({
                    first_name: body.first_name || "",
                    last_name: body.last_name || "",
                    name: body.name || "",
                    email: body.email || "",
                    password: passwordHash,
                    phone: body.phone
                }, { transaction: transaction });
                let user_department = await models.user_departments.create({
                    user_id: user.id,
                    department_id: body.department_id
                }, { transaction: transaction })
                await transaction.commit();
                resolve({ message: "User created and associated user with department" });
            }catch(e){
                console.log("#######################")
                if(transaction) await transaction.rollback();
                return reject({ status: 500, error: e });
            }

        })
    }
}

