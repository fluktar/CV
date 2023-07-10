'use strict';
let loggedIn = false;

function login(form) {
	const username = form.username.value;
	const password = form.password.value;

	if(username === 'ptyc' && password === 'ptyc1@3') {
		loggedIn = true;
		document.getElementById('loginForm').style.display = 'none';
	} else {
		document.getElementById('errorDiv').style.display = 'block';
	}

	return false;
}

document.body.addEventListener('click', function() {
	if (!loggedIn) {
		document.getElementById('content').innerHTML = '';
	}
}, true);