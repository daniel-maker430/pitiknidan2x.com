// Dark/Light Mode Toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  document.getElementById('toggle-theme').textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Lightbox for images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.lightbox-img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});
lightbox.addEventListener('click', () => lightbox.style.display = 'none');

// Contact Form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  e.target.reset();
});

// Booking Form
document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  const date = document.getElementById('booking-date').value;
  if (!date) return alert('Please select a valid date.');
  alert(`Thank you! Your session for ${date} has been requested.`);
  e.target.reset();
});
