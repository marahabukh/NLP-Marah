import { handleSubmit } from "../src/client/js/formHandler.js";

describe("Testing ", () => {
    beforeAll(() => {
        document.body.innerHTML = `<input id="name" value="https://example.com" /><div id="results"></div>`;
        global.alert = jest.fn(); 
    });

    test("handleSubmit should be defined", () => {
        expect(handleSubmit).toBeDefined();
    });

    test("handleSubmit should process API response", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () =>
                    Promise.resolve({
                        Sentiment: "Positive",
                        agreement: "AGREEMENT",
                        subjectivity: "OBJECTIVE",
                        confidence: "100",
                        irony: "NONIRONIC",
                        score_tag: "P+"
                    })
            })
        );

        await handleSubmit(new Event("submit"));

        expect(document.getElementById("results").innerHTML).toContain("Sentiment");
        expect(document.getElementById("results").innerHTML).toContain("Positive");
    });
});
