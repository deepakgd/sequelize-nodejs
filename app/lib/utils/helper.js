const to = require('await-to-js').to,
     moment = require('moment');
     

const config = require('../../config');


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
    }
}