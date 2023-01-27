#!/usr/bin/env node
import { Command } from "commander";
import genDiff from "../index.js";

const program = new Command();

program
  .name("genDiff")
  .version("0.0.1")
  .description("Compares two configuration files and shows a difference.")
  .option("-f, --format <type>", "output format")
  .argument("<filepath1>", "path to the first file to compare")
  .argument("<filepath2>", "path to the first second to compare")
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  });

program.parse();
