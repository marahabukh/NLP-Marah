export const validateInput = (inputText) => {
    console.log("::: Validating Input :::", inputText);

    const pattern = /^(https?:\/\/)([a-zA-Z0-9.-]+)(:\d+)?(\/[\w.-]*)*(\?[\w=&%-]*)?(#[\w-]*)?$/;

    const isValid = pattern.test(inputText);

    console.log(`Validation result: ${isValid ? " Valid URL" : " Invalid URL"}`);
    return isValid;
};
