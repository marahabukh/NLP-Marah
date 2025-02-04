export const validateInput = (inputText) => {
    console.log("::: Validating Input :::", inputText);
    const pattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w]*)*\/?$/;
    return pattern.test(inputText);
};
