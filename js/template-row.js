'use strict';

var utils = require('./utils');

var templateRow = function(data) {
  return '<tr>' +
            '<td>' + data.id + '</td>' +
            '<td>' + data.name + '</td>' +
            '<td>' + data.login + '</td>' +
            '<td class="editable">' + data['e-mail'] + '</td>' +
            '<td>' + utils.formatDate(data.created) + '</td>' +
         '</tr>'
};

var addRow = function(data) {
  var tableBody = document.querySelector('.table tbody');
  tableBody.insertAdjacentHTML('beforeend', templateRow(data));
};

