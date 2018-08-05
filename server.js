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
    console.log(users)
    users.then(
            response => { 
                res.status(200).json(response)
            }
        )
        .catch(err => {
            res.status(500).json({ error : err})
        })
});

app.post('/users', (req, res) => {
    const { name } = req.body
    db.addUser( name )
        .then(response => {
            res.status(200).json(response)
        })
        .catch()
});



app.listen(8000, () => {
    console.log('app listening on port 8000!');
});

//Run app, then load http://localhost:8000 in a browser to see the output.