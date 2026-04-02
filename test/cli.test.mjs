import test from 'ava';
import {execa} from 'execa';

const options = {pwd: '..'};

test('Input without value prints current year message', async t => {
	const currentYear = new Date().getFullYear();
	const result = await execa('./cli.mjs', [], {...options, reject: false});
	t.true(result.stdout.includes(`No year provided, assuming you meant ${currentYear}.`));
});

test('Input with invalid value', async t => {
	const {exitCode, stderr} = await t.throwsAsync(() => execa('./cli.mjs', [2000], options));
	t.is(exitCode, 2);
	t.is(stderr, 'No regular expression available.');
});

test('Input with valid value', async t => {
	const {exitCode, stdout} = await execa('./cli.mjs', [2016], options);
	t.is(exitCode, 0);
	t.truthy(stdout);
});

test('Input with "help" flag', async t => {
	const {exitCode, stdout} = await execa('./cli.mjs', ['--help'], options);
	t.is(exitCode, 0);
	t.truthy(stdout);
});
