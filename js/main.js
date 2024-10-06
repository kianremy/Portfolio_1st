// ##################### HEADER SECTION ############################
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');
const body = document.body;

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
  body.classList.toggle('menu-open');
});

// ################## CONTACT SECTION ##########################
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting
  let isValid = true;

  // Get form inputs by their IDs
  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('emailAddress');
  const phoneInput = document.getElementById('phoneNumber');
  const messageInput = document.getElementById('message');

  // Clear previous error messages
  clearErrors();

  // Validate Full Name
  if (nameInput.value.trim() === '') {
    setError(nameInput, 'Full Name is required');
    isValid = false;
  }

  // Validate Email Address
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInput.value.trim() === '') {
    setError(emailInput, 'Email Address is required');
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    setError(emailInput, 'Please enter a valid email address');
    isValid = false;
  }

  // No strict validation for Phone Number (just checking if it's not empty)
  if (phoneInput.value.trim() === '') {
    setError(phoneInput, 'Phone Number is required');
    isValid = false;
  }

  // Validate Message
  if (messageInput.value.trim() === '') {
    setError(messageInput, 'Message is required');
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    // You can proceed with form submission, e.g., using AJAX or a backend method here
  }
});

function setError(input, message) {
  input.style.border = '2px solid red'; // Set red border on error
  const errorElement = document.createElement('small');
  errorElement.style.color = 'red';
  errorElement.textContent = message;
  input.parentNode.appendChild(errorElement);
}

function clearErrors() {
  document.querySelectorAll('input').forEach(input => input.style.border = '');
  document.querySelectorAll('small').forEach(small => small.remove());
}
// ############################# PROJECT SECTION ############################
