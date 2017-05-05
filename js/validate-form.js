'use strict';

function showError(input) {

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
