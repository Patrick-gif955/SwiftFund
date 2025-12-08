'use strict';
const signupInput = document.getElementById('signupInput');
const clearSignupEmail = document.querySelector('.clear-signupEmail');
const message = document.getElementsByClassName('message');
const SignupPassword = document.getElementById('SignupPassword');
const clearPassword = document.querySelector('.clear-password ');
const passwordRule = document.querySelector('.password-rule ');
const ruleUpper = document.querySelector('.ruleUpper i');
const ruleLower = document.querySelector('.rule-lower i');
const ruleNumber = document.querySelector('.rule-number i');
const ruleSpecial = document.querySelector('.rule-special i');
const ruleLength = document.querySelector('.rule-lenght i');
const signupBtn = document.getElementById('signupBtn');
const checkbox = document.getElementById('schkbx');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

signupBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (signupInput.value.trim() === '') {
    message[0].textContent = 'Please fill in this field';
    message[0].style.color = 'red';
    signupInput.style.borderColor = 'hsl(0, 66%, 54%)';
  } else if (!emailPattern.test(signupInput.value.trim())) {
    message[0].textContent = 'Please enter a valid email address.';
    message[0].style.color = 'red';
    signupInput.style.borderColor = 'hsl(0, 66%, 54%)';
  } else {
    message[0].textContent = '';
    signupInput.style.borderColor = '#ccc';
  }

  if (SignupPassword.value.trim() === '') {
    message[1].textContent = 'Password is required.';
    message[1].style.color = 'red';
    SignupPassword.style.borderColor = 'hsl(0, 66%, 54%)';
  } else {
    message[1].textContent = '';
    SignupPassword.style.borderColor = '#ccc';
  }

  if (!checkbox.checked) {
    message[2].textContent = 'You must agree to the terms and conditions.';
    message[2].style.color = 'red';
  } else {
    message[2].textContent = '';
  }
});

signupInput.addEventListener('input', function () {
  if (signupInput.value.trim() !== '') {
    clearSignupEmail.style.display = 'block';
  } else {
    clearSignupEmail.style.display = 'none';
  }
});
clearSignupEmail.addEventListener('click', function () {
  signupInput.value = '';
  clearSignupEmail.style.display = 'none';
  message[0].textContent = '';
  signupInput.style.borderColor = '#ccc';
});

clearPassword.addEventListener('click', function () {
  if (SignupPassword.type === 'password') {
    SignupPassword.type = 'text';
    clearPassword.innerHTML =
      '<i class="fa-regular fa-eye-slash" style="color: #74c0fc"></i>';
    clearPassword.title = 'Hide Password';
  } else {
    SignupPassword.type = 'password';
    clearPassword.innerHTML =
      '<i class="fa-regular fa-eye" style="color: #74c0fc"></i>';
    clearPassword.title = 'Show Password';
  }
});

SignupPassword.addEventListener('focus', function () {
  passwordRule.style.display = 'block';
  // document.querySelector('.form').style.position = 'absolute';
  // document.querySelector('.form').style.top = '4.5rem';
  // clearPassword.style.width = '14%';
  // clearSignupEmail.style.width = '14%';
});

SignupPassword.addEventListener('blur', function () {
  passwordRule.style.display = 'none';
  // document.querySelector('.form').style.position = 'relative';
  // document.querySelector('.form').style.top = '0px';
  // clearPassword.style.width = '3%';
  // clearSignupEmail.style.width = '3%';
});

SignupPassword.addEventListener('input', function () {
  const value = SignupPassword.value;

  //rule lenght//
  if (value.length >= 8) {
    ruleLength.classList.remove('fa-circle-xmark');
    ruleLength.classList.add('fa-check-circle');
    ruleLength.style.color = 'green';
  } else {
    ruleLength.classList.remove('fa-check-circle');
    ruleLength.classList.add('fa-circle-xmark');
    ruleLength.style.color = 'red';
  }

  //rule upper//
  if (/[A-Z]/.test(value)) {
    ruleUpper.classList.remove('fa-circle-xmark');
    ruleUpper.classList.add('fa-check-circle');
    ruleUpper.style.color = 'green';
  } else {
    ruleUpper.classList.remove('fa-check-circle');
    ruleUpper.classList.add('fa-circle-xmark');
    ruleUpper.style.color = 'red';
  }

  //rule lower//

  if (/[a-z]/.test(value)) {
    ruleLower.classList.remove('fa-circle-xmark');
    ruleLower.classList.add('fa-check-circle');
    ruleLower.style.color = 'green';
  } else {
    ruleLower.classList.remove('fa-check-circle');
    ruleLower.classList.add('fa-circle-xmark');
    ruleLower.style.color = 'red';
  }

  //rule number//
  if (/[0-9]/.test(value)) {
    ruleNumber.classList.remove('fa-circle-xmark');
    ruleNumber.classList.add('fa-check-circle');
    ruleNumber.style.color = 'green';
  } else {
    ruleNumber.classList.remove('fa-check-circle');
    ruleNumber.classList.add('fa-circle-xmark');
    ruleNumber.style.color = 'red';
  }

  //rule special//

  if (/[!@#$%^&*(),£.?":{}|_<>]/.test(value)) {
    ruleSpecial.classList.remove('fa-circle-xmark');
    ruleSpecial.classList.add('fa-check-circle');
    ruleSpecial.style.color = 'green';
  } else {
    ruleSpecial.classList.remove('fa-check-circle');
    ruleSpecial.classList.add('fa-circle-xmark');
    ruleSpecial.style.color = 'red';
  }
});
