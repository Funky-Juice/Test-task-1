'use strict';

var templateForm = function() {
  return '<form class="user-form">' +
            '<input class="text-field__input" type="text" name="user_name" placeholder="Укажите имя" required>' +
            '<input class="user-form__send-btn" type="submit">' +
          '</form>'
};

// добавление формы в разметку
var showForm = function() {
  var tableContainer = document.getElementById('app');
  tableContainer.insertAdjacentHTML('beforeend', templateForm());
}

module.exports = showForm;
