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
    if (req.body.counter >= 0) {
        counter = req.body.counter;
        console.log(req.body);
        res.json({ message: "Hello world", counter: counter });
    } else {
        res.status(400).json({ message: "Errore" });
    }

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