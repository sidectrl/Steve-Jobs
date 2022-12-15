"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
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
    chats.push(req.body);
    console.log("creation successful");
});
app.post('/chats/:id/messages', (req, res) => {
    var _a;
    (_a = chats.find(chat => chat.id == req.params.id)) === null || _a === void 0 ? void 0 : _a.messages.push(req.body);
    res.json({ chats });
});
app.listen(3000, () => {
    console.log('Server is up');
});
