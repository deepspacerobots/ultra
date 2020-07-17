import CookieJar from './modules/cookie-jar';
const cookies = new CookieJar();

import Alert from './modules/alert';

if (document.getElementById('challenge')) {
	const challenge = new Alert('#challenge', cookies);
}
if (document.getElementById('cheers')) {
	const cheers = new Alert('#cheers', cookies);
}

if (document.querySelector('.glide')) {
	new Glide('.glide').mount();
}
