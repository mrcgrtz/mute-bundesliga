import test from 'ava';
import mute from '..';

test('an unavailable year', t => {
  t.falsy(mute(2015));
});

// @TODO: Use a loop for the following tests, AVA won’t comply FFS.

test('mute(2016)', t => {
  t.snapshot(mute(2016));
});

test('mute(2017)', t => {
  t.snapshot(mute(2017));
});

test('mute(2018)', t => {
  t.snapshot(mute(2018));
});

test('mute(2019)', t => {
  t.snapshot(mute(2019));
});
