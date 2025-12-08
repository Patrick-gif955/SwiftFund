'use strict';
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll < 10) {
    header.classList.remove('show');
    header.classList.remove('hide');
    return;
  }

  if (currentScroll > lastScroll) {
    header.classList.add('hide');
    header.classList.remove('show');
  } else {
    header.classList.add('show');
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});

const menu = document.getElementById('menu');
const close = document.getElementById('close');
const mobile = document.querySelector('.mobile');

menu.addEventListener('click', () => {
  mobile.style.display = 'block';
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('header').style.display = 'none';
});

close.addEventListener('click', () => {
  mobile.style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
  document.querySelector('header').style.display = 'flex';
});
