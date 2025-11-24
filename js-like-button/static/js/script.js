/* Login toggle */
const loginBtn = document.getElementById('login-btn');
loginBtn.onclick = function () {
  this.textContent = this.textContent === 'Sign in' ? 'Sign out' : 'Sign in';
};

/* Hide "Add Definition" */
const addBtn = document.getElementById('add-btn');
addBtn.onclick = function () {
  this.style.display = 'none';
};

/* Modal elements */
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const modalClose = document.getElementById('modal-close');

/* Modal: open helper */
function openModal(message) {
  modalMessage.textContent = message;
  modal.removeAttribute('hidden');
  // Move focus to close for keyboard users
  modalClose.focus();
}

/* Modal: close helpers */
function closeModal() {
  modal.setAttribute('hidden', '');
}

/* Close via button */
modalClose.onclick = closeModal;

/* Close on overlay click */
modal.onclick = function (e) {
  if (e.target === modal) closeModal();
};

/* Close on Esc key */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
});

/* Map reaction type to friendly copy */
const reactionCopy = {
  like: 'liked',
  love: 'loved',
  insight: 'marked as insightful',
  celebrate: 'celebrated'
};

/* Handle reactions: increment the correct count and show feedback */
document.querySelectorAll('.definition').forEach(def => {
  def.querySelectorAll('.reaction-btn').forEach(btn => {
    btn.onclick = function () {
      const type = this.dataset.type;
      const title = this.dataset.title;

      // Find the counter that follows this button 
      const countSpan = this.nextElementSibling;
      const current = parseInt(countSpan.textContent, 10) || 0;
      countSpan.textContent = current + 1;

      // Construct and show modal message
      const verb = reactionCopy[type] || 'reacted';
      openModal(`${title} was ${verb}`);
    };
  });
});
