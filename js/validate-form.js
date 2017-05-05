'use strict';

// проверка корректности заполнения полей формы
function validateForm() {
  var userForm = document.querySelector('#app .user-form');
  var formInputs = userForm.querySelectorAll('.user-form__input');

  for(var i = 0; i < formInputs.length; i++) {

    var input = formInputs[i];
    input.addEventListener('input', clearError);

    var pattern = input.getAttribute('pattern');
    pattern = new RegExp(pattern);

    if (pattern.test(input.value) !== true) {
      showError(input);
      throw new Error('Заполните все поля');
    }
  };
};

// вывод сообщения об ошибке в поле ввода формы
function showError(input) {
  var errorMessage = input.parentNode.querySelector('.error-text');

  if(!errorMessage) {
    input.classList.add('error');

    var text = input.getAttribute('data-error');
    if (!text) return;

    var div = document.createElement('div');
    div.textContent = text;
    div.className = 'error-text';

    input.parentNode.appendChild(div);
  };
};

// удаление сообщения об ошибке
function clearError() {
  this.classList.remove('error');

  var parentElem = this.parentNode;
  var errorMessage = parentElem.querySelector('.error-text');

  if(errorMessage) {
    parentElem.removeChild(errorMessage);
  };
};

module.exports = validateForm;
