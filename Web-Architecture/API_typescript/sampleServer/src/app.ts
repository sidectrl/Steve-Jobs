import express from 'express';
import bodyParser from 'body-parser';
import uniqid from 'uniqid';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const chats = [
    {
        id: '1',
        name: 'family del cuore',
        texts: [{ author: "franco", text: "ciao, come stai?" }]
    },
    {
        id: '2',
        name: 'calcetto',
        texts: [{ author: "pippo", text: "ciao, calcettoo?" }]
    },
    {
        id: '3',
        name: 'jessico calcetto',
        texts: [{ author: "alfredo", text: "uorzonataaa?!" }]
    }
].map((item) => ({ ...item, id: uniqid() }));

app.get('/', (req, res) => {
    res.json({ text: "Hello world" });
});

app.get('/chats', (req, res) => {
    res.json(chats);
});

app.get('/chats/:id', (req, res) => {
    const chat = res.json(chats.find(chat => chat.id == req.params.id));
    if (chat) {
        res.json(chat);
    }
    else {
        res.status(404).json({ text: "Chat not found" });
    }
});

app.post('/chats', (req, res) => {
    chats.push(req.body)
    const { name } = req.body;
    chats.push({ name, id: uniqid(), texts: [] });
    res.json(chats);

});
app.post('/chats/:id/texts', (req, res) => {
    const { author, text } = req.body;
    const chat = chats.find(chat => chat.id === req.params.id);
    if (chat) {
        chat.texts.push({author, text});
    }
    else {
        res.status(404).json({ text: "Chat not found" });
    }
});

app.listen(3000, () => console.log('Server is up'));