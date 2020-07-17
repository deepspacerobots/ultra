import CookieJar from '../../../../../../src/js/modules/cookie-jar';
import Alert from '../../../../../../src/js/modules/alert';
import Glide from '../../../../../../node_modules/@glidejs/glide';

'use strict';

const cookies = new CookieJar();

if (document.getElementById('challenge')) {
	const challenge = new Alert('#challenge', cookies);
}
if (document.getElementById('cheers')) {
	const cheers = new Alert('#cheers', cookies);
}

if (document.querySelector('.glide')) {
	new Glide('.glide').mount();
}
