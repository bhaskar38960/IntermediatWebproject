document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === '' || email === '') {
    alert('All fields are required.');
    return;
  }

  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Form submitted successfully!');
});

