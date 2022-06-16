const fs = require('fs/promises');
const path = require('path');
const dotenv = require('dotenv');
const Command = require('commander').Command;

dotenv.config();

function getCommandLineInterface() {
  const program = new Command();

  program
    .description(process.env.SKRIDDY_DESCRIPTION);

  program
    .command('command <input>')
    .requiredOption('-a, --account <account name>', 'Name of the account to populate')
    .requiredOption('-s, --stage <stage>', 'Environment to execute the populate in')
    .option('-d, --dry-run <true/false>', 'When true, it will write data to Postgres', true)
    .action((input, options) => start(input, options))
    .showHelpAfterError()
    .exitOverride();

  return program;
}

async function main(input, options) {
  console.info('main');
}

async

(async() => {
  const program = getCommandLineInterface();
  program.action(async (input, options) => await main(input, options));

  try {
    program.parse(process.argv);
  } catch (error) {
    console.error(`\n >> Error ${error.message}`)
  }
})();