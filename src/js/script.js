import CookieJar from './modules/cookie-jar';
const cookies = new CookieJar();

import Alert from './modules/alert';

if (document.getElementById('challenge')) {
	const challenge = new Alert('#challenge', cookies);
}
if (document.getElementById('cheers')) {
	const cheers = new Alert('#cheers', cookies);
}

import UltraAnimate from "./UltraAnimate.js";

window.onload = () => {
    // variables
    const ribbon = new UltraAnimate("header .ribbon-wrapper");

    // calls
    ribbon.delay(400).show();
}

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
