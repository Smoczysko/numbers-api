const chalk = require('chalk');

const fetchData = require('../utils/data').fetch;

module.exports = async (number) => {
    try {
        console.log(chalk.yellow(`Loading math fact for ${number ? number : 'random number'}...`));
 
        const response = await fetchData(number, 'math');

        if (!response.isNumberFound) {
            console.log(chalk.grey(`No math fact found for ${number}, sorry!`));
        } else {
            console.log(chalk.blueBright(response.text));
        }
    } catch (error) {
        console.error(chalk.red(error));
    }
}