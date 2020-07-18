import CookieJar from './modules/cookie-jar';
const cookies = new CookieJar();

import Alert from './modules/alert';

if (document.getElementById('challenge')) {
	const challenge = new Alert('#challenge', cookies);
}
if (document.getElementById('cheers')) {
	const cheers = new Alert('#cheers', cookies);
}

document.querySelector('.send-cheers button').addEventListener('click', () => {
	const cheers = new Alert('#cheers', cookies);
	cheers.open();
});

import UltraAnimate from './UltraAnimate.js';

window.onload = () => {
	// variables
	const ribbon = new UltraAnimate('header .ribbon-wrapper');

	// calls
	ribbon.delay(400).show();
};

import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';
if (document.querySelector('.quotes-slider')) {
	const controlArrows = [
		'<span class="hidden">Previous Quote</span><svg class="slider-caret" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><polyline points="35,2 13,24 35,46 " /></svg>',
		'<span class="hidden">Next Quote</span><svg class="slider-caret" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><polyline points="13,46 35,24 13,2 "/></svg>'
	];
	const quotes = tns({
		container: '.quotes-slider',
		items: 1,
		mode: 'carousel',
		nav: false,
		speed: 400,
		items: 1,
		controls: true,
		controlsText: controlArrows,
		controlsPosition: 'bottom',
		swipeAngle: 15,
		loop: true
	});
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzNogh6rhcxKHGorzEaiTUMUV6CkZdUwq402Sllt7hi84N4xNI/exec';

function cheersSuccess(form, response) {
	console.log('Success!', response);
	const successElement = document.createElement('p');
	const successMessage = document.createTextNode('Got it, thanks for the shout-out!');
	successElement.appendChild(successMessage);
	form.style.display = 'none';
	form.parentNode.insertBefore(successElement, form);
}
function cheersError(form, error) {
	console.error('Error!', error.message);

	const errorElement = document.createElement('p');
	const errorMessage = document.createTextNode('Looks like something went wrong. Refresh the page and try again.');
	errorElement.appendChild(errorMessage);
	form.parentNode.insertBefore(errorElement, form);
}

if (document.forms['send-your-cheers']) {
	const form = document.forms['send-your-cheers'];
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then((response) => cheersSuccess(form, response))
			.catch((error) => cheersError(form, error));
	});
}
