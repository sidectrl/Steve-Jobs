const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let users = [{ name: 'Mario', surname: 'Esposito', id: 1 },
{ name: 'Gianni', surname: 'Celeste', id: 2 },
{ name: 'Turi', surname: 'Coppola', id: 3 },
{ name: 'Gianni', surname: 'Nannini', id: 4 },
{ name: 'Gianni', surname: 'Morandi', id: 5 },
{ name: 'Mario', surname: 'Uscapparu', id: 6 },
{ name: 'Mario', surname: 'Lentini', id: 7 }];


app.get('/', (req, res) => {
    res.json({ message: "Hello world", counter: counter });
});

app.get('/people', (req, res) => {
    if (req.query.name) {
        res.json(users.filter(user => user.name.toLowerCase() == req.query.name.toLowerCase()));
    }
    else {
        res.json({ users });
    }
});
app.listen(3000, () => {
    console.log('Server is up');
});