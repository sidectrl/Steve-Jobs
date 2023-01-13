import { Router } from "express";
import { books } from "../data/books";
import { scooters } from "../data/scooter";
import { Scooter } from "../models/Scooter";
import { getDistance } from "../utility/distance";
import shortid from 'shortid';
export const router = Router();

router.get('/Scooters', (req, res) => {
    let scts: (Scooter & { distance?: number })[] = [...scooters];
    const { lat, long, maxDistance } = req.query;
    if (lat && long && maxDistance) {
        scts = scts.map((scooters) => {
            return {
                ...scooters,
                distance: getDistance(
                    scooters.lat,
                    scooters.long,
                    Number(lat),
                    Number(long)
                ),
            };
        });
        const result = scts
            .filter(({ distance }) => distance! < Number(maxDistance))
            .sort((a, b) => (a.distance! > b.distance! ? 1 : -1));
        return res.json(result);
    }
    res.json(scts);
});

router.patch("/scooters/:id", (req, res) => {
    const unlock = req.body.unlock; //sblocca
    const scooterId = req.params.id;

    const scooter = scooters.find((id) => id.id === scooterId);
    if (scooter && !scooter.busy) {
        books.push({
            id: shortid.generate(),
            scooterId: scooter.id,
            startLat: scooter.lat,
            startLong: scooter.long,
            startDate: Date.now(),
        });
        res.json(books.find((iesim => iesim.scooterId === scooterId)));
    } else {
        res.status(400).json({ message: "scooter not available" })
    }
});

