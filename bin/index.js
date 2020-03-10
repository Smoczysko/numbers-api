const program = require('commander');
const chalk = require('chalk');
const path = require('path');

const pkg = require(path.join(__dirname, '../package.json'));

const mathCommand = require('./commands/math');
const triviaCommand = require('./commands/trivia');

program
    .version(pkg.version)
    .description(chalk.green(pkg.description));

program
    .command('trivia')
    .alias('t')
    .arguments('[number]')
    .description('Displays trivia for selected number')
    .action(triviaCommand);

program
    .command('math')
    .alias('t')
    .arguments('[number]')
    .description('Displays fun math fact for selected numner')
    .action(mathCommand);

program.on('command:*', () => {
    console.error(chalk.red('Invalid command: ', program.args.join(' ')));
    console.error(chalk.red('See --help for a list of available commands.'));

    process.exit(1);
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    console.warn(chalk.red('No command specified!'));
    console.warn('');

    program.outputHelp(help => chalk.yellow(help));

    process.exit(1);
}