export const handleSubmit = async (event) => {
    event.preventDefault();

    const inputText = document.getElementById("name").value;

    if (!inputText) {
        alert("Please enter text to analyze.");
        return;
    }

    console.log("::: Form Submitted :::", inputText);

    try {
        const response = await fetch("http://localhost:8081/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: inputText })
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById("results").innerHTML = `
                <p><strong>Sentiment:</strong> ${result.Sentiment}</p>
                <p><strong>Agreement:</strong> ${result.agreement}</p>
                <p><strong>Subjectivity:</strong> ${result.subjectivity}</p>
                <p><strong>Confidence:</strong> ${result.confidence}</p>
                <p><strong>Irony:</strong> ${result.irony}</p>
                <p><strong>Score Tag:</strong> ${result.score_tag}</p>
            `;
        } else {
            document.getElementById("results").innerHTML = `<p>Error: ${result.error}</p>`;
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        document.getElementById("results").innerHTML = "<p>Internal Server Error</p>";
    }
};
