const addContactForm = document.getElementById('add-contact-form');
addContactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = document.getElementById('contact-name');
  const phoneInput = document.getElementById('contact-phone');
  const name = nameInput.value;
  const phone = phoneInput.value;

  const tableBody = document.querySelector('#contacts-table tbody');
  const newRow = tableBody.insertRow();

  const nameCell = newRow.insertCell();
  nameCell.textContent = name;

  const phoneCell = newRow.insertCell();
  phoneCell.textContent = phone;

  nameInput.value = '';
  phoneInput.value = '';
});
