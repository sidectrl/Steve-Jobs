import express from 'express';
import { scooters } from './data/scooter';
import { Scooter } from './models/Scooter';
import { books } from './data/books';
import { router as scooterApi} from './routes/scooters';
import bodyParser from 'body-parser';
const app = express();
app.get("/scooters", (req, res) => {

});

app.use("/scooters", scooterApi);

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Server is running");
});