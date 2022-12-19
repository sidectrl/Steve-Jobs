"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const uniqid_1 = __importDefault(require("uniqid"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
/*type Message = { author: string; text: string };
type Chat = { name: string; id: string; messages: Message[] };

const chats: Chat[] = [];*/
const chats = [
    {
        id: '1',
        name: 'family del cuore',
        messages: [{ author: "franco", text: "ciao, come stai?" },
            { author: "barbara", text: "io bene, tu?" },
            { author: "alfredo", text: "wee ciaoo carusi" }]
    },
    {
        id: '2',
        name: 'calcetto',
        messages: [{ author: "pippo", text: "ciao, calcettoo?" }]
    },
    {
        id: '3',
        name: 'jessico calcetto',
        messages: [{ author: "alfredo", text: "uorzonataaa?!" }]
    }
].map((item) => (Object.assign(Object.assign({}, item), { id: (0, uniqid_1.default)() })));
app.get('/', (req, res) => {
    res.json({ text: "Hello world" });
});
app.get('/chats', (req, res) => {
    if (req.query.name) {
        res.json(chats.filter(chat => chat.name.toLowerCase().includes(String(req.query.name).toLowerCase())));
    }
    else {
        res.json(chats);
    }
});
app.get('/chats/:id', (req, res) => {
    const chat = chats.find(chat => chat.id == req.params.id);
    if (chat) {
        res.json(chat);
    }
    else {
        res.status(404).json({ text: "Chat not found" });
    }
});
app.get('/chats/:id/messages', (req, res) => {
    const chat = chats.find(chat => chat.id == req.params.id);
    if (chat) {
        if (req.query.text) {
            res.json(chat.messages.filter(message => message.text.toLowerCase().includes(String(req.query.text).toLowerCase())));
        }
        else {
            res.json(chat.messages);
        }
    }
    else {
        res.status(404).json({ text: "Chat not found" });
    }
});
app.post('/chats', (req, res) => {
    chats.push(req.body);
    const { name } = req.body;
    chats.push({ name, id: (0, uniqid_1.default)(), messages: [] });
    res.json(chats);
});
app.post('/chats/:id/messages', (req, res) => {
    const { author, text } = req.body;
    const chat = chats.find(chat => chat.id === req.params.id);
    if (chat) {
        chat.messages.push({ author, text });
    }
    else {
        res.status(404).json({ text: "Chat not found" });
    }
});
app.listen(3000, () => console.log('Server is up'));
