const fetch = require("node-fetch");

const defaultFallback = 'NOTFOUND';

module.exports = {
    fetch: async (number, type) => {
        const apiNumber = number !== undefined ? number : 'random';
        const apiType = type !== undefined ? type : 'trivia';

        const url = `http://numbersapi.com/${apiNumber}/${apiType}?default=${defaultFallback}`;

        const response = await fetch(url);
        const text = await response.text();

        return  {
            isNumberFound: text !== defaultFallback,
            text
        };
    }
};