"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scooter_1 = require("./data/scooter");
const distance_1 = require("./utility/distance");
const books_1 = require("./data/books");
const app = (0, express_1.default)();
app.get("/scooters", (req, res) => {
    let scts = [...scooter_1.scooters];
    const { lat, long, maxDistance } = req.query;
    if (lat && long && maxDistance) {
        scts = scts.map((scooters) => {
            return Object.assign(Object.assign({}, scooters), { distance: (0, distance_1.getDistance)(scooters.lat, scooters.long, Number(lat), Number(long)) });
        });
        const result = scts
            .filter(({ distance }) => distance < Number(maxDistance))
            .sort((a, b) => (a.distance > b.distance ? 1 : -1));
        return res.json(result);
    }
    res.json(scts);
});
app.patch("/scooters/:id", (req, res) => {
    //const lock = req.body.lock;
    const scooterId = req.params.id;
    let scts = [...scooter_1.scooters];
    let item = scts.find((id) => id.id === scooterId);
    if (item && !item.busy) {
        books_1.books.push({
            scooterId: item.id,
            startLat: item.lat,
            startLong: item.long,
            endLat: 0,
            endLong: 0,
            startDate: 0,
            endDate: 0,
            pay: 3.5
        });
        res.json(books_1.books.find((iesim => iesim.scooterId === scooterId)));
    }
});
app.listen(3000, () => {
    console.log("Server is running");
});
