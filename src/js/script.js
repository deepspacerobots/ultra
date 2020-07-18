import CookieJar from './modules/cookie-jar';
const cookies = new CookieJar();

import Alert from './modules/alert';

if (document.getElementById('challenge')) {
	const challengeModal = new Alert('#challenge', cookies);
	if(!cookies.get("authorized")){
		challengeModal.open();
	}
}

import AgeVerification from "./AgeVerification.js";

document.querySelector('.age-checker div.check').addEventListener("click", (e) => {
	var month = parseInt(document.querySelector('.age-checker input#mm').value) - 1;
	var day = parseInt(document.querySelector('.age-checker input#dd').value);
	var year = parseInt(document.querySelector('.age-checker input#yyyy').value);
	document.querySelector(".error.fill-all-fields").classList.remove("visible");
	document.querySelector(".error.not-old-enough").classList.remove("visible");
	if(month == 1){
		month = 0;
	}

	var user_age = AgeVerification(new Date(year, month, day), new Date())[0];

	if(month && year && day){
		console.log('yes');
		if(user_age < 21){
			cookies.set("authorized", false);
			document.querySelector(".error.not-old-enough").classList.add("visible");
		} else {
			cookies.set("authorized", true);
			const challenge = new Alert('#challenge', cookies);
			challenge.close();
		}
	} else {
		document.querySelector(".error.fill-all-fields").classList.add("visible");
	}

});

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
	form.style.display = 'none';
	document.getElementById('cheers-success').classList.remove('hidden');
}
function cheersError(form, error) {
	console.error('Error!', error.message);
	document.getElementById('cheers-error').classList.remove('hidden');
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
