const to = require('await-to-js').to,
     moment = require('moment'),
     bcrypt = require('bcrypt');
     
const config = require('../../config');

const saltRounds = 10;

var self = module.exports = {
    /**
     * getRandomNumber - return random number within given range
     * @param {INT} max - max number 
     * @param {INT} min - min number
     */
    getRandomNumber: function(max, min){
        return Math.floor(Math.random() * (max - min + 1)+ min)
    },
    /**
     * validateEmail - return whether given email is valid or not
     * @param {STRING} - email address
     */
    validateEmail: function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    /**
     * handleError - log error and response error message to user
     * @param {OBJECT} res - help to send back response to user
     * @param {NUMBER} statusCode - status code such as 200, 400, 401, 403, 500 etc., 
     * @param {OBJECT} error - error message
     */
    handleError: function(res, statusCode, error){
        console.log(error);
        res.status(statusCode).json(error);
    },
    generatePassword: function(password){
        return new Promise( async (resolve, reject) => {
            bcrypt.genSalt(saltRounds, function(err, salt) {
                if(err) return reject(err);
                bcrypt.hash(password, salt, function(err, hash) {
                    if(err) return reject(err);
                    resolve(hash)
                });
            });
        })
    }
}