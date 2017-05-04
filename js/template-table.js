'use strict';

var utils = require('./utils');
var createRowBtn = require('./row-btn');
var editField = require('./edit-field');
var renderForm = require('./template-form');

// шаблон таблицы
var templateTable = function(data) {
  return '<table class="table">' +
            '<tbody >' +
              '<tr>' +
                '<th>ID</th>' +
                '<th>Имя</th>' +
                '<th>Логин</th>' +
                '<th>Электронная почта</th>' +
                '<th>Дата регистрации</th>' +
              '</tr>' +

      data.users.map(function(users) {
        return '<tr>' +
                  '<td class="row-id">' + users.id + '</td>' +
                  '<td>' + users.name + '</td>' +
                  '<td>' + users.login + '</td>' +
                  '<td class="editable">' + users['e-mail'] + '</td>' +
                  '<td>' + utils.formatDate(users.created) + '</td>' +
                '</tr>'
      }).join('');
            '<tbody >' +
          '</table>'
};

var renderTable = function(data) {
  var appContainer = document.getElementById('app');
  appContainer.classList.add('app-container');

  // добавление таблицы в DOM
  appContainer.insertAdjacentHTML('beforeend', templateTable(data));

  // добавление кнопки
  createRowBtn();

  // редактирование поля
  editField();

  // добавляем форму создания нового пользователя
  renderForm();
};

module.exports = renderTable;
