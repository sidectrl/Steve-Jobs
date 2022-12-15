import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let chats = [
    { id: '1', name: 'family del cuore', messages: [{ creator: "franco", message: "ciao, come stai?" }] },
    { id: '2', name: 'calcetto', messages: [{ creator: "pippo", message: "ciao, calcettoo?" }] },
    { id: '3', name: 'jessico calcetto', messages: [{ creator: "alfredo", message: "uorzonataaa?!" }] }
];

app.get('/', (req, res) => {
    res.json({ message: "Hello world" });
});

app.get('/chats', (req, res) => {
    res.json({ chats });
});

app.get('/chats/:id', (req, res) => {
    res.json(chats.find(chat => chat.id == req.params.id));
});

app.post('/chats', (req, res) => {
    chats.push(req.body)
    console.log("creation successful");

});
app.post('/chats/:id/messages', (req, res) => {
    chats.find(chat => chat.id == req.params.id)?.messages.push(req.body);
    res.json({ chats });

});

app.listen(3000, () => console.log('Server is up'));