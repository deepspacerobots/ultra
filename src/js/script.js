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
    const ribbon = new UltraAnimate(".ribbon-wrapper");

    // calls
    ribbon.delay(400).show();
}

import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

if (document.querySelector('.quotes-slider')) {
	const controlArrows = [ '<', '>' ];
	const quotes = tns({
		container: '.quotes-slider',
		items: 1,
		smode: 'carousel',
		center: false,
		nav: false,
		controls: true,
		speed: 400,
		items: 1,
		controlsText: controlArrows,
		autoHeight: true,
		swipeAngle: 15,
		loop: true
	});
}
