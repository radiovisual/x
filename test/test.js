import test from 'ava';
import execa from 'execa';
import condense from 'selective-whitespace';

test('x marks the spot', async t => {
	let ret;

	try {
		ret = await execa('./_app.js');
	} catch (err) {
		ret = err.stderr;
	}

	t.is(condense(ret.stdout, {stripAll: true}).replace(/'/g, ''), '12{3:3}4567');
});

