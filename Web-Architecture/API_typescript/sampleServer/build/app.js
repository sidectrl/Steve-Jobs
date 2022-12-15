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
const chats = [
    {
        id: '1',
        name: 'family del cuore',
        messages: [{ creator: "franco", message: "ciao, come stai?" }]
    },
    {
        id: '2',
        name: 'calcetto',
        messages: [{ creator: "pippo", message: "ciao, calcettoo?" }]
    },
    {
        id: '3',
        name: 'jessico calcetto',
        messages: [{ creator: "alfredo", message: "uorzonataaa?!" }]
    }
].map((item) => (Object.assign(Object.assign({}, item), { id: (0, uniqid_1.default)() })));
app.get('/', (req, res) => {
    res.json({ message: "Hello world" });
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
        res.status(404).json({ message: "Chat not found" });
    }
});
app.post('/chats', (req, res) => {
    chats.push(req.body);
    const { name } = req.body;
    chats.push({ name, id: (0, uniqid_1.default)(), messages: [] });
    res.json(chats);
});
app.post('/chats/:id/messages', (req, res) => {
    var _a;
    (_a = chats.find(chat => chat.id == req.params.id)) === null || _a === void 0 ? void 0 : _a.messages.push(req.body);
    res.json({ chats });
});
app.listen(3000, () => console.log('Server is up'));
