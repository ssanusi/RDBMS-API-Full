const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getUsers,
    addUser,
    getUserById,
    updateUser,
    deleteUser,
    getPosts,
    addPost ,
    getPostById,
    updatePost,
    deletePost
    
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
// Query for Posts 
function getPosts(){
    return db('posts')
}

function getPostById(id){
    return db('post').where({ id })
}

function addPost (post){
   return db('posts').insert({
       text : post.text,
       userId : post.userId
   })
}

function updatePost(id,post){
    return db('posts').where({ id }).update({ text : post})
}

function deletePost(id){
    return db('posts').where({ id }).del()
}
