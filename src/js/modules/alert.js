export default class Alert {
	constructor(alert, cookies) {
		this.alert = document.querySelector(alert);
		this.closeButton = this.alert.querySelector('.alert-close');
		this.type = this.alert.dataset.type;
		this.cookieID = this.alert.id;
		this.cookies = cookies;
		this.init();
	}

	open() {
		console.log('called');
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
