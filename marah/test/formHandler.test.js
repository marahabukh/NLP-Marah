/**
 * @jest-environment jsdom
 */
const { handleSubmit } = require("../src/client/js/formHandler");

describe("Testing the formHandler function", () => {
    beforeAll(() => {
        document.body.innerHTML = `
            <form id="urlForm">
                <input id="name" value="https://example.com" />
                <button id="submitButton" type="submit">Submit</button>
            </form>
            <div id="results"></div>
        `;

        global.alert = jest.fn();
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ score_tag: "P" }),
            })
        );
    });

    test("handleSubmit should be defined", () => {
        expect(handleSubmit).toBeDefined();
    });

    test("handleSubmit should process API response", async () => {
        await handleSubmit(new Event("submit"));
        expect(document.getElementById("results").innerHTML).toContain("Sentiment");
    });
});
