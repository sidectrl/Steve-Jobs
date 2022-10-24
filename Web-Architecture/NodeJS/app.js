const express = require ('express');
const app = express();

app.get('/', function (req, res){
    res.send('Hello World');
})

// un intero che rappresenta la porta di ascolto
app.listen(3000);