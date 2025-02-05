import { validateInput } from "../src/client/js/nameChecker.js";

describe("Testing", () => {
    test("validateInput should be defined", () => {
        expect(validateInput).toBeDefined();
    });

    test("validateInput ", () => {
        expect(typeof validateInput).toBe("function");
    });

    test("validateInput should return true for valid URLs", () => {
        expect(validateInput("https://example.com")).toBe(true);
        expect(validateInput("http://www.google.com")).toBe(true);
        expect(validateInput("https://sub.domain.co.uk")).toBe(true);
        expect(validateInput("http://localhost:3000")).toBe(true);
        expect(validateInput("https://example.com/path/to/page?query=123#section")).toBe(true);
    });

    test("validateInput ", () => {
        expect(validateInput("example.com")).toBe(false);
        expect(validateInput("htp://wrong-url.com")).toBe(false);
        expect(validateInput("just-text")).toBe(false);
        expect(validateInput("ftp://not-http-or-https.com")).toBe(false);
        expect(validateInput("http://invalid_domain")).toBe(false);
    });
});
