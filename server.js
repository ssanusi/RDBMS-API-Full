const express = require('express');
const app = express();
const db = require('./data/db')
const morgan = require('morgan')

app.use(express.json());
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.send('Hello World!');
});
//CRUD API for users
app.get('/users', (req, res) => {
   db.getUsers()
        .then(
            response => { 
                res.status(200).json(response)
            }
        )
        .catch(err => {
            res.status(500).json({ error : err})
        })
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params
    db.getUserById(id)
        .then( response => {
        res.status(200).json(response)
        })
        .catch( err => {
            res.status(500).json({error : err})
        })
    
});
app.post('/users', (req, res) => {
    const { name } = req.body
    db.addUser(name)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({ error : err })
        })
});
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body
    db.updateUser(id, name)
        .then(response => {
        res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error : err})
        })
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    db.deleteUser(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error : err})
        })
});

//CRUD API for POSTS
app.get('/posts', (req, res) => {
    const users = db.getPosts()
    users.then(
            response => { 
                res.status(200).json(response)
            }
        )
        .catch(err => {
            res.status(500).json({ error : err})
        })
});

app.get('/posts/:id', (req, res) => {
    const { id } = req.params
   
    db.getPostById(id)
        .then( response => {
        res.status(200).json(response)
        })
        .catch( err => {
            res.status(500).json({error : err})
        })
    
});
app.post('/posts', (req, res) => {
    const { post , userId } = req.body
    const post = { post , userId }
    db.addUser(post)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({ error : err })
        })
});
app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { post } = req.body
    db.updatePost(id, post)
        .then(response => {
        res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error : err})
        })
});
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    db.deletePost(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error : err})
        })
});

//CRUD API for Tags
app.get('/tags', (req, res) => {
    db.getTags()
        .then(
            response => { 
                res.status(200).json(response)
            }
        )
        .catch(err => {
            res.status(500).json({ error : err})
        })
});

app.get('/tags/:id', (req, res) => {
    const { id } = req.params
   
    db.getPostById(id)
        .then( response => {
        res.status(200).json(response)
        })
        .catch( err => {
            res.status(500).json({error : err})
        })
});
app.post('/tags', (req, res) => {
    const { post , userId } = req.body
    const post = { post , userId }
    db.addTag(post)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({ error : err })
        })
});
app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { tag } = req.body
    db.updateTag(id, tag)
        .then(response => {
        res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error : err})
        })
});
app.delete('/tags/:id', (req, res) => {
    const { id } = req.params;
    db.deleteTag(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({error : err})
        })
});

app.listen(8000, () => {
    console.log('app listening on port 8000!');
});

//Run app, then load http://localhost:8000 in a browser to see the output.