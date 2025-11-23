// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
const body = document.body;

darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  darkToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Optional: Smooth scrolling for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
