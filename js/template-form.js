'use strict';

var templateForm = function() {
  return '<form class="user-form">' +
            '<label class="user-form__item">' +
               '<span class="user-form__field-name">Имя: </span>' +
               '<input class="user-form__input" type="text" name="user_name" placeholder="Укажите имя" required>' +
            '</label>' +

            '<label class="user-form__item">' +
              '<span class="user-form__field-name">Логин: </span>' +
              '<input class="user-form__input" type="text" name="user_name" placeholder="Login" required>' +
            '</label>' +

            '<label class="user-form__item">' +
              '<span class="user-form__field-name">Электронная почта: </span>' +
              '<input class="user-form__input" type="text" name="user_name" placeholder="example@mail.com" required>' +
            '</label>' +

            '<label class="user-form__item">' +
              '<span class="user-form__field-name">Дата регистрации: </span>' +
              '<input class="user-form__input" type="text" name="user_name" placeholder="Registration date" required>' +
            '</label>' +

            '<input class="user-form__send-btn" type="submit">' +
          '</form>'
};

// добавление формы в разметку
var showForm = function() {
  var tableContainer = document.getElementById('app');
  tableContainer.insertAdjacentHTML('beforeend', templateForm());
}

module.exports = showForm;
