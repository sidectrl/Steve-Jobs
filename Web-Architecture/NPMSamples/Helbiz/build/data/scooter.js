"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scooters = void 0;
const shortid = require('shortid');
exports.scooters = [
    {
        id: shortid.generate(),
        lat: 12.312030,
        long: 16.12309,
        busy: false,
        battery: 100,
    },
    {
        id: shortid.generate(),
        lat: 5.12309,
        long: 27.12039,
        busy: false,
        battery: 69,
    },
    {
        id: shortid.generate(),
        lat: 30.103912,
        long: 10.1023129,
        busy: false,
        battery: 90,
    },
    {
        id: shortid.generate(),
        lat: 8.91023,
        long: 6.91293,
        busy: false,
        battery: 10,
    },
    {
        id: shortid.generate(),
        lat: 11.81239,
        long: 9.11239,
        busy: false,
        battery: 2,
    },
];
