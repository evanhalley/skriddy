import fs from 'fs/promises';
import path from 'path';
import { config } from 'dotenv';
import { Command } from 'commander';
import pjson from './package.json';

config();

function getCommandLineInterface() {
  const program = new Command();

  program
    .description();

  program
    .command('generate')
    .requiredOption('-n, --name <name>', '')
    .requiredOption('-d, --description <description>', '')
    .requiredOption('-a, --author <author>', '')
    .requiredOption('-v, --version <version>', '')
    .requiredOption('-l, --license <license>', '')
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