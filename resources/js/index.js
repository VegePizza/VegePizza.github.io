const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.nav__list--menu');
const alertMsg = document.querySelector('.alert-msg');
const form = document.querySelector('form');
const alertMsgTodo = document.querySelector('.alert-msg--todo')
const todoLink = document.querySelector('.project__link--todo')

document.addEventListener(
  'scroll',
  () => {
    if (window.scrollY >= 200) {
      nav.classList.add('nav--bar');
    } else if (window.scrollY < 200) {
      nav.classList.remove('nav--bar');
    }
  },
  { passive: true }
);

todoLink.addEventListener('click', () => {
  alertMsgTodo.textContent = 'Sorry, This project is under maintenance';
});

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('nav__list--menu--clicked');
  hamburgerIcon.classList.toggle('fa-times');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let name = document.getElementById('name');
  if (name.value.trim().length < 2) {
    alertMsg.classList.remove('alert-msg--success');
    alertMsg.classList.add('alert-msg--error');
    alertMsg.textContent = 'Name must be at least 2 characters.';
    name.focus();
  } else {
    // input is valid
    alertMsg.classList.remove('alert-msg--error');
    alertMsg.classList.add('alert-msg--success');
    alertMsg.textContent =
      'Your message was sent successfully! I will contact you soon! Thanks :)';
    sendEmail();
  }
});

function sendEmail() {
  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceID = '';
  const templateID = '';

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    })
    .catch((err) => console.log(err));

  return false;
}
