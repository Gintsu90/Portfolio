import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

const info = [
    {
    name: "Toni",
    surname: "Pekkala",
    birthday: "03.11.1990",
    city: "Oulu"
    },
    {
    name: "Pena",
    surname: "Koivula",
    birthday: "05.03.1880",
    city: "Pudasjärvi"
    },
];

app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("testi");
});

app.get("/info", (req, res) => {
    res.status(200).send(info);
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});