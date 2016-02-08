import test from 'ava';
import execa from 'execa';

test('x marks the spot', async t => {
	let ret;

	try {
		ret = await execa('./_app.js');
	} catch (err) {
		ret = err.stderr;
	}

	t.is(ret.stdout, '1 \n2 \n{\"3\":3} \n4\n5 6 7\n8 9 10 11 12 13\n[14,15] [16,17] ');
});
