// Login toggle
document.getElementById('login-btn').onclick = function () {
  this.textContent = this.textContent === 'Sign in' ? 'Sign out' : 'Sign in';
};

// Hide "Add Definition"
document.getElementById('add-btn').onclick = function () {
  this.style.display = 'none';
};

// Modal elements
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const modalClose = document.getElementById('modal-close');

// Open modal on like, increment count
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.onclick = function () {
    const title = this.dataset.title;
    modalMessage.textContent = `${title} was liked`;
    modal.removeAttribute('hidden');     

    const countSpan = this.nextElementSibling;
    const current = parseInt(countSpan.textContent, 10);
    countSpan.textContent = current + 1;
  };
});

// Close modal on button
modalClose.onclick = function () {
  modal.setAttribute('hidden', '');
};

// Close on overlay click 
modal.onclick = function (e) {
  if (e.target === modal) modal.setAttribute('hidden', '');
};

// Close on Esc key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
    modal.setAttribute('hidden', '');
  }
});
