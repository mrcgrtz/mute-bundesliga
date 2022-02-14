#!/usr/bin/env node

import process from 'node:process';
import meow from 'meow';
import mute from './src/mute.js';

const cli = meow(`
  Usage: cli.mjs [YEAR]

  Example:
    $ cli.mjs 2016
    ${mute(2016)}
`, {importMeta: import.meta});

const {input} = cli;
let regex = '';
if (input.length > 0) {
	regex = mute(input);
} else {
	const now = new Date().getFullYear();
	console.log(`No year provided, assuming you meant ${now}.`);
	regex = mute(now);
}

if (regex) {
	console.log(regex);
	process.exit(0);
} else {
	console.error('No regular expression available.');
	process.exit(2);
}
