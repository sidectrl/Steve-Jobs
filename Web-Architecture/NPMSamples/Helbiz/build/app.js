"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var scooters_1 = require("./routes/scooters");
var books_1 = require("./routes/books");
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/scooters", scooters_1.router);
app.use("/books", books_1.router);
app.listen(3000, function () { return console.log("Server is running"); });
