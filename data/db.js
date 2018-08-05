const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getUsers,
    addUser
}


function getUsers(){
    return db('users')
}

function addUser (newUser){
    db('users').insert({
        name : newUser,
        createdAt : datetime('now')
    })
}