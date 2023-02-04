#!/usr/bin/env node
import { Command } from "commander";
import genDiff from "../src/index.js";

const program = new Command();

program
  .name("genDiff")
  .version("0.0.1")
  .description("Compares two configuration files and shows a difference.")
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument("<filepath1>", "path to the first file to compare")
  .argument("<filepath2>", "path to the first second to compare")
  .action((filepath1, filepath2, options) => {
    // eslint-disable-next-line no-console
    console.log(genDiff(filepath1, filepath2, options.format));
  });

program.parse();
