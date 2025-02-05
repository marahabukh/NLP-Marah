import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome .");
});

app.post("/analyze", (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Missing input ." }); 
    }

    res.json({ message: "Successfully analyzed!" });
});


if (process.env.NODE_ENV !== "test") {
    app.listen(5000, () => {
        console.log("Server is running on port 3000");
    });
}

export { app };
