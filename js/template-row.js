'use strict';

var utils = require('./utils');
var createRowBtn = require('./row-btn');
var editField = require('./edit-field');

function setRowId() {
  var table = document.querySelector('#app .table');
  var rowIdFields = table.querySelectorAll('.row-id');

  if(rowIdFields.length !== 0) {
    var lastRowId = rowIdFields[rowIdFields.length - 1];
    var newRowId = +lastRowId.innerText + 1;
  } else {
    newRowId = 1;
  };

  return newRowId;
}

// шаблон строки
var templateRow = function(data) {
  return '<tr>' +
            '<td class="row-id">' + setRowId() + '</td>' +
            '<td>' + data.name + '</td>' +
            '<td>' + data.login + '</td>' +
            '<td class="editable">' + data['e-mail'] + '</td>' +
            '<td>' + utils.formatDate(data.created) + '</td>' +
         '</tr>'
};

// добавление новой строки в таблицу
var addRow = function(data) {
  var tableBody = document.querySelector('.table tbody');
  tableBody.insertAdjacentHTML('beforeend', templateRow(data));

  // добавление кнопки
  createRowBtn();

  // редактирование поля
  editField();
};

module.exports = addRow;
