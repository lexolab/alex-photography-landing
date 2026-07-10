const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.dataset.full;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
}

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

document.getElementById('showAll').addEventListener('click', function(){
  document.querySelectorAll('.portfolio-item.extra').forEach(item => item.classList.remove('hidden'));
  this.style.display = 'none';
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Formulario listo. Conecta tu servicio de correo para recibir los mensajes.';
});

document.getElementById('year').textContent = new Date().getFullYear();
