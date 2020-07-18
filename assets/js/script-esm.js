class CookieJar {
	constructor() {}
	set(name, value, days) {
		var expires = '';
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			expires = '; expires=' + date.toUTCString();
		}
		document.cookie = name + '=' + (value || '') + expires + '; path=/';
	}
	get(name) {
		var nameEQ = name + '=';
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
	erase(name) {
		document.cookie = name + '=; Max-Age=-99999999';
	}
}

class Alert {
	constructor(alert, cookies) {
		this.alert = document.querySelector(alert);
		this.closeButton = this.alert.querySelector('.alert-close');
		this.type = this.alert.dataset.type;
		this.cookieID = this.alert.id;
		this.cookies = cookies;
		this.init();
	}

	open() {
		this.alert.dataset.open = true;
	}

	close() {
		this.alert.dataset.open = false;
		this.cookies.set('alert-' + this.cookieID, 'hide', 0);
	}

	init() {
		this.closeButton.addEventListener('click', () => {
			this.close();
		});

		if (!this.cookies.get('alert-' + this.cookieID)) {
			this.cookies.set('alert-' + this.cookieID, 'show', 0);
		}

		if (this.cookies.get('alert-' + this.cookieID) == 'show') {
			this.open();
		} else {
			this.close();
		}
	}
}

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
