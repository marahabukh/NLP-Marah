const request = require("supertest");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome.");
});

app.post("/analyze", (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Missing " });
    }

    res.json({ message: "Successfully analyzed!" });
});

describe(" Testing ", () => {
    test(" GET /  valid response", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Welcome.");
    });

    test(" POST /analyze ", async () => {
        const response = await request(app)
            .post("/analyze")
            .send({ text: "Machine Learning is fascinating!" })
            .set("Accept", "application/json");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: "Successfully analyzed!" });
    });

    test(" POST / 400 ", async () => {
        const response = await request(app)
            .post("/analyze")
            .send({})
            .set("Accept", "application/json");

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: "Missing input ." });
    });
});
