'use strict';

function showError(input) {
  input.classList.add('error');

  var text = input.getAttribute('data-error');
  if (!text) return;

  var div = document.createElement('div');
  div.textContent = text;
  div.className = 'error-text';

  input.parentNode.appendChild(div);
}

function validateForm() {
  var userForm = document.querySelector('#app .user-form');
  var formInputs = userForm.querySelectorAll('.user-form__input');

  for(var i = 0; i < formInputs.length; i++) {

    var input = formInputs[i];

    var pattern = input.getAttribute('pattern');

    pattern = new RegExp(pattern);

    if (pattern.test(input.value) !== true) {
      showError(input);
    }
  };
};

module.exports = validateForm;
