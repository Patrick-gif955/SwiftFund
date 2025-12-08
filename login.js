'use strict';

const loginBtn = document.getElementById('loginBtn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const msg = document.querySelector('.message');
const pmsg = document.querySelector('.passwordMessage');
const clearEmail = document.querySelector('.clear-email');
const togglePassword = document.querySelector('.toggle-password');
let passwordVisible = false;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
loginBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (email.value.trim() === '') {
    msg.textContent = 'Please fill in this field.';
    msg.style.color = 'red';
    email.style.borderColor = 'hsl(0, 66%, 54%)';
  } else if (!emailPattern.test(email.value.trim())) {
    msg.textContent = 'Please enter a valid email address.';
    msg.style.color = 'red';
    email.style.borderColor = 'hsl(0, 66%, 54%)';
  } else {
    msg.textContent = '';
    email.style.borderColor = '#ccc';
  }

  if (password.value.trim() === '') {
    pmsg.textContent = 'password is required.';
    pmsg.style.color = 'red';
    document.getElementById('password').style.borderColor = 'hsl(0, 66%, 54%)';
  } else {
    pmsg.textContent = '';
    password.style.borderColor = '#ccc';
  }
});

email.addEventListener('input', function () {
  if (email.value.trim() !== '') {
    clearEmail.style.display = 'block';
  } else {
    clearEmail.style.display = 'none';
  }
});

clearEmail.addEventListener('click', function () {
  email.value = '';
  clearEmail.style.display = 'none';
  msg.textContent = '';
  email.style.borderColor = '#ccc';
});

togglePassword.addEventListener('click', function () {
  if (password.type === 'password') {
    password.type = 'text';
    togglePassword.innerHTML =
      '<i class="fa-regular fa-eye-slash" style="color: #74c0fc"></i>';
    togglePassword.title = 'Hide Password';
  } else {
    password.type = 'password';
    togglePassword.innerHTML =
      '<i class="fa-regular fa-eye" style="color: #74c0fc"></i>';
    togglePassword.title = 'Show Password';
  }
});
