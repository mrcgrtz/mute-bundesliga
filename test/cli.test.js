import test from 'ava';
import {execa} from 'execa';

const options = {pwd: '../'};

test('Input without value assumes current year', async t => {
	try {
		const {stdout} = await execa('./cli.js', [], options);
		t.is(stdout, `No year provided, assuming you meant ${new Date().getFullYear()}.`);
	} catch {
		const {stdout} = await t.throwsAsync(() => execa('./cli.js', [], options));
		t.is(stdout, `No year provided, assuming you meant ${new Date().getFullYear()}.`);
	}
});

test('Input with invalid value', async t => {
	const {exitCode, stderr} = await t.throwsAsync(() => execa('./cli.js', [2000], options));
	t.is(exitCode, 2);
	t.is(stderr, 'No regular expression available.');
});

test('Input with valid value', async t => {
	const {exitCode, stdout} = await execa('./cli.js', [2016], options);
	t.is(exitCode, 0);
	t.truthy(stdout);
});

test('Input with "help" flag', async t => {
	const {exitCode, stdout} = await execa('./cli.js', ['--help'], options);
	t.is(exitCode, 0);
	t.truthy(stdout);
});
