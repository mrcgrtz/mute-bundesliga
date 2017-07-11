#!/usr/bin/env node

'use strict';

const meow = require('meow');
const chalk = require('chalk');
const mute = require('.');

const cli = meow(`
  Usage
    $ cli.js <year>
  Example
    $ cli.js 2016
    Regular expression: ${chalk.bold('#([BDFHKMRSW][09BCGMORSV][458ABCEFGILV]){2}')}
`);

const input = cli.input;
let regex = '';
if (input.length > 0) {
  regex = mute(input);
} else {
  const now = new Date().getFullYear();
  console.log(`No year provided, assuming you meant ${now}.`);
  regex = mute(now);
}

if (regex) {
  console.log(`Regular expression: ${chalk.bold(`${regex}`)}`);
  process.exit(0);
} else {
  console.log('No regular expression available.');
  process.exit(2);
}
