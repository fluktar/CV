"use strict";
let loggedIn = false;
const loginForm = document.getElementById("loginForm");

const login = "ptyc";
const password = "ptyc123";

const loginInput = document.getElementById("username");

const passwordInput = document.getElementById("password");

const errorDiv = document.getElementById("errorDiv");

const pl = document.getElementById("pl");

const eng = document.getElementById("eng");

const loginButton = document.getElementById("loginButton");

function showLoginForm() {
  if (loginInput.value === login && passwordInput.value === password) {
    loggedIn = true;
  }
  if (loggedIn) {
    if (pl.checked && eng.checked) {
      pl.checked = false;
    } else if (pl.checked) {
      window.location.href = "pl.html";
    } else if (eng.checked) {
      window.location.href = "eng.html";
    }
  } else {
    errorDiv.style.display = "block";
  }

  pl.addEventListener("click", function () {
    if (pl.checked && eng.checked) {
      eng.checked = false;
    }
  });

  eng.addEventListener("click", function () {
    if (pl.checked && eng.checked) {
      pl.checked = false;
    }
  });
}

loginButton.addEventListener("click", showLoginForm);
