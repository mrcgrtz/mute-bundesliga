import test from 'ava';
import mute from '../index.js';

test('an unavailable year', t => {
	t.falsy(mute(2015));
});

for (let year = 2016; year <= 2019; year++) {
	test(`mute(${year})`, t => {
		t.snapshot(mute(year));
	});
}
