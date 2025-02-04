import { handleSubmit } from "./js/formHandler.js"; 
import "./styles/form.css";

import "./styles/main.css";



document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("urlForm");
    if (form) {
        form.addEventListener("submit", handleSubmit);
    }
});

console.log("Client script loaded!");
