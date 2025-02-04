import { validateInput } from "./nameChecker.js";

export const handleSubmit = async (event) => {
    event.preventDefault();

    const formText = document.getElementById("name").value;
    if (!validateInput(formText)) {
        alert("Invalid input. Please enter a proper URL.");
        return;
    }

    try {
        const response = await fetch("http://localhost:8000/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: formText }),
        });

        const data = await response.json();
        document.getElementById("results").innerHTML = `<p>Sentiment: ${data.score_tag}</p>`;
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to analyze text.");
    }
};
