#!/usr/bin/env node
import { Command } from 'commander';
// eslint-disable-next-line import/extensions
import genDiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    // eslint-disable-next-line no-console
    console.log(genDiff(filepath1, filepath2, program.opts().format));
  });
program.parse();
