const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.send('Hello World');
});
// stringa, 

// un intero che rappresenta la porta di ascolto
// si aspetta un numero
app.listen(3000);