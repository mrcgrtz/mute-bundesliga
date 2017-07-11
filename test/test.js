import test from 'ava';
import mute from '.';

test('2015', t => {
  t.falsy(mute(2015));
});

test('2016', t => {
  t.is(mute(2016), '#([BDFHKMRSW][09BCGMORSV][458ABCEFGILV]){2}');
});
