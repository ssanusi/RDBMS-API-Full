const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getUsers,
    addUser,
    getUserById,
    updateUser,
    deleteUser
}


function getUsers(){
    return db('users')
}

function getUserById(id){
    return db('users').where({ id : id })
}

function addUser (user){
   return db('users').insert({
        name : user
    })
}

function updateUser(id,user){
    return db('users').where({ id }).update({ name : user })
}

function deleteUser(id){
    return db('users').where({ id }).del()
}