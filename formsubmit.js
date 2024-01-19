function validateForm() {

  var emailInput = document.getElementById('emailInput');
  var messageInput = document.getElementById('messageInput');

  incorrect = false;

  if (emailInput.value.trim() === '') {
    emailInput.style.border = "2px solid red";
    incorrect = true;
  }
  else {
    emailInput.style.border = "none";
  }

  if (messageInput.value.trim() === '') {
    messageInput.style.border = "2px solid red";
  }
  else {
    messageInput.style.border = "none";
  }

  if (incorrect) return false;

  return true;

}