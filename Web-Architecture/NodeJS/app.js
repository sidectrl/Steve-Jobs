const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var counter = 0;


app.get('/', (req, res) => {
    counter++;
    res.json({ message: "Hello world", counter: counter });
});

app.put('/', (req, res) => {
    counter = req.body.counter;
    res.json({ message: "Hello world", counter: counter });
    console.log(req.body);

});

app.delete('/', (req, res) => {
    counter--;
    res.json({ message: "Hello world", counter: counter });
});
// stringa, 

// un intero che rappresenta la porta di ascolto
// si aspetta un numero
app.listen(3000, () => {
    console.log('Server is up');
});