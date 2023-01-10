import { Scooter } from "../models/Scooter";
const shortid = require('shortid');
export const scooters: Scooter[] = [
    {
        id: shortid.generate(),
        lat: 120,
        long: 316,
        busy: false,
        battery: 100,
    },
    {
        id: shortid.generate(),
        lat: 50,
        long: 27,
        busy: false,
        battery: 69,
    },
    {
        id: shortid.generate(),
        lat: 300,
        long: 269,
        busy: false,
        battery: 90,
    },
    {
        id: shortid.generate(),
        lat: 89,
        long: 690,
        busy: false,
        battery: 10,
    },
    {
        id: shortid.generate(),
        lat: 118,
        long: 911,
        busy: false,
        battery: 2,
    },

];