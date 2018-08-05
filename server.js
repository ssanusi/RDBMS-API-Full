const express = require('express');
const app = express();
const db = require('./data/db')
const morgan = require('morgan')

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    const users = db.getUsers()
    users.then(
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
    console.log(id)
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



app.listen(8000, () => {
    console.log('app listening on port 8000!');
});

//Run app, then load http://localhost:8000 in a browser to see the output.