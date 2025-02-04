import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome .");
});

app.post("/analyze", (req, res) => {
    res.json({ message: "successfully!" });
});

if (process.env.NODE_ENV !== "test") {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}

export { app };
