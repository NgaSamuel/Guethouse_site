
// Wait until the HTML content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  // When the form is submitted
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Simple user feedback using alert
    alert('Thank you for contacting SMANG GUEST IN! We will reach out to you shortly.');

    // Optional: Clear the form
    form.reset();
  });
});

