'use strict';
function login(form) {
	const username = form.username.value;
	const password = form.password.value;

	if (username === 'ptyc' && password === 'ptyc1@3') {
		document.getElementById('loginForm').style.display = 'none';
	} else {
		document.getElementById('errorDiv').style.display = 'block';
	}

	return false;
}
