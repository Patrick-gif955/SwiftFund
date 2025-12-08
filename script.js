'use strict';
const testimonial = document.querySelectorAll('.testimonial');
let current = 0;

function showTestimonial(index) {
  testimonial.forEach(t => t.classList.remove('active'));
  testimonial[index].classList.add('active');
}

function nextTestimonial() {
  current = (current + 1) % testimonial.length;
  showTestimonial(current);
}

document.getElementById('next').addEventListener('click', nextTestimonial);
document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + testimonial.length) % testimonial.length;
  showTestimonial(current);
});
setInterval(nextTestimonial, 6000);

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
