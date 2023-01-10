import express from 'express';
import { scooters } from './data/scooter';
import { distance } from './utility/distance';
const app = express();
app.get("/scooters", (req, res) => {
    console.log(req.query);
    const myLat = Number(req.query.myLat) as number;
    const myLong = Number(req.query.myLong) as number;
    const maxRange = Number(req.query.maxRang) as number;
    if (myLat && myLong && maxRange) {
        res.json(scooters.filter((scooter => distance(scooter.long, scooter.lat,myLong, myLat) <= maxRange)));
    }
    else {
        res.json(scooters)
    }
});

app.listen(3000, () => {
    console.log("Server is running");
});