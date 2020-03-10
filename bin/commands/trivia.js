const chalk = require('chalk');

const fetchData = require('../utils/data').fetch;

module.exports = async (number) => {
    try {
        console.log(chalk.yellow(`Loading trivia for ${number ? number : 'random number'}...`));

        const response = await fetchData(number, 'trivia');

        if (!response.isNumberFound) {
            console.log(chalk.grey(`No trivia found for ${number}, sorry!`));
        } else {
            console.log(chalk.blueBright(response.text));
        }
    } catch (error) {
        console.error(chalk.red(error));
    }
}