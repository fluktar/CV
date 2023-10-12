"use strict";
let loggedIn = false;
const loginForm = document.getElementById("loginForm");

const login = "ptyc";
const password = "ptyc1@3";

const loginInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const pl = document.getElementById("pl");
const eng = document.getElementById("eng");

const loginButton = document.getElementById("loginButton");

function btn() {
  loginButton.addEventListener("click", function () {
    loginForm.style.display = "none";
  });
}

if (loginInput.value == login) {
  btn();
}
