// Morabits — site interactions

// Sticky nav shadow
const navbar = document.getElementById('navbar');
const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const burger = document.getElementById('navBurger');
const menu = document.getElementById('navMenu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
});
menu.querySelectorAll('a.nav-link, .btn').forEach(a =>
  a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  })
);

// "Hire" dropdown toggle (tap on mobile, hover handled by CSS on desktop)
const dropdown = document.querySelector('.nav-dropdown');
dropdown.querySelector('.nav-dd-toggle').addEventListener('click', e => {
  e.preventDefault();
  dropdown.classList.toggle('is-open');
});

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Testimonial slider
const track = document.getElementById('sliderTrack');
const slides = track.children.length;
const dotsWrap = document.getElementById('sliderDots');
let index = 0;
let timer;

for (let i = 0; i < slides; i++) {
  const dot = document.createElement('button');
  dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
  dot.addEventListener('click', () => go(i, true));
  dotsWrap.appendChild(dot);
}

function render() {
  track.style.transform = `translateX(-${index * 100}%)`;
  [...dotsWrap.children].forEach((d, i) => d.classList.toggle('is-active', i === index));
}

function go(i, user) {
  index = (i + slides) % slides;
  render();
  if (user) restartAutoplay();
}

function restartAutoplay() {
  clearInterval(timer);
  timer = setInterval(() => go(index + 1), 6000);
}

document.getElementById('prevBtn').addEventListener('click', () => go(index - 1, true));
document.getElementById('nextBtn').addEventListener('click', () => go(index + 1, true));

// Pause autoplay while hovering the slider
const slider = document.getElementById('slider');
slider.addEventListener('mouseenter', () => clearInterval(timer));
slider.addEventListener('mouseleave', restartAutoplay);

render();
restartAutoplay();

// Newsletter form (front-end only; wire to a form service before launch)
document.getElementById('newsForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = e.target.email.value.trim();
  if (!email || !email.includes('@')) return;
  e.target.hidden = true;
  document.getElementById('newsOk').hidden = false;
});
