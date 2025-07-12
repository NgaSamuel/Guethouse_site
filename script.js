document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for contacting SMANG GUEST IN! We will reach out to you shortly.');
    form.reset();
  });
});