"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var scooters_1 = require("./routes/scooters");
var books_1 = require("./routes/books");
var auth_1 = require("./routes/auth");
var body_parser_1 = __importDefault(require("body-parser"));
exports.app = (0, express_1.default)();
exports.app.use(body_parser_1.default.json());
exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.app.get("/status", function (req, res) {
    res.json({ message: "Server is runnning" });
});
exports.app.use("/auth", auth_1.router);
exports.app.use("/scooters", scooters_1.router);
exports.app.use("/books", books_1.router);
exports.app.listen(3000, function () { return console.log("Server is running"); });
