"use strict";

window.onload = (function() {
	document.getElementById("login_button").onclick = login;
	document.getElementById("switch_signup").onclick = switchToSignUp;
	document.getElementById("signup_button").onclick = signup;
	document.getElementById("switch_login").onclick = switchToLogIn;

	function login() {

	}

	function switchToSignUp() {
		let loginPage = document.getElementById("login");
		let signupPage = document.getElementById("signup");

		loginPage.style.display = 'None';
		signupPage.style.display = 'Block';
	}

	function signup() {

	}

	function switchToLogIn() {
		let loginPage = document.getElementById("login");
		let signupPage = document.getElementById("signup");

		loginPage.style.display = 'Block';
		signupPage.style.display = 'None';
	}
});