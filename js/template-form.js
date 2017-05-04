'use strict';

var submitForm = require('./submit-form');

// шаблон формы
var templateForm = function() {
  return '<form class="user-form">' +
            '<label class="user-form__item">' +
              '<span class="user-form__field-name">Имя: </span>' +
              '<input class="user-form__input" type="text" name="user_name" placeholder="Иванов Иван" pattern="[А-Яа-яЁё \s]+$" data-error="Укажите имя кириллицей" required>' +
            '</label>' +

            '<label class="user-form__item">' +
              '<span class="user-form__field-name">Логин: </span>' +
              '<input class="user-form__input" type="text" name="user_login" placeholder="Login" data-error="Не менее 5 символов" required>' +
            '</label>' +

            '<label class="user-form__item">' +
              '<span class="user-form__field-name">Электронная почта: </span>' +
              '<input class="user-form__input" type="text" name="user_e-mail" placeholder="example@mail.com" data-error="Перепроверьте почту" required>' +
            '</label>' +

            '<label class="user-form__item">' +
              '<span class="user-form__field-name">Дата регистрации: </span>' +
              '<input class="user-form__input" type="text" name="user_reg-date" placeholder="Registration date" data-error="Укажите дату регистрации" required>' +
            '</label>' +

            '<input id="form-sbmt" class="user-form__send-btn" type="submit">' +
          '</form>'
};

// добавление формы в разметку
var renderForm = function() {
  var appContainer = document.getElementById('app');
  appContainer.insertAdjacentHTML('afterbegin', templateForm());

  submitForm();
}

module.exports = renderForm;
