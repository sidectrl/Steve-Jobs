"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scooter_1 = require("./data/scooter");
const distance_1 = require("./utility/distance");
const app = (0, express_1.default)();
app.get("/scooters", (req, res) => {
    console.log(req.query);
    const myLat = Number(req.query.myLat);
    const myLong = Number(req.query.myLong);
    const maxRange = Number(req.query.maxRang);
    if (myLat && myLong && maxRange) {
        res.json(scooter_1.scooters.filter((scooter => (0, distance_1.distance)(scooter.long, scooter.lat, myLong, myLat) <= maxRange)));
    }
    else {
        res.json(scooter_1.scooters);
    }
});
app.listen(3000, () => {
    console.log("Server is running");
});
