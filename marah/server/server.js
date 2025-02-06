import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8081;

const API_URL = "https://api.meaningcloud.com/sentiment-2.1";

app.post("/analyze", async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Missing input text" });
    }

    try {
        const response = await fetch(`${API_URL}?key=${process.env.API_KEY}&lang=en&txt=${encodeURIComponent(text)}`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        });

        const data = await response.json();

        if (data.status.code !== "0") {
            return res.status(500).json({ error: "Error analyzing text", details: data.status.msg });
        }

        res.json({
            Sentiment: "Positive", 
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            irony: data.irony,
            score_tag: data.score_tag
        });
    } catch (error) {
        console.error("Error fetching MeaningCloud API:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export { app };
