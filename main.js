'use strcit';

var templateTable = function(data) {
  return '<table class="table">' +
            '<tr>' +
              '<th>id</th>' +
              '<th>name</th>' +
              '<th>login</th>' +
              '<th>e-mail</th>' +
              '<th>created</th>' +
            '<tr>' +
            '<tr>' +
              '<td>' + data.id + '</td>' +
              '<td>' + data.name + '</td>' +
              '<td>' + data.login + '</td>' +
              '<td>' + data.email + '</td>' +
              '<td>' + data.created + '</td>' +
            '<tr>' +
          '</table>'
}

var tableContainer = document.getElementById('app');

tableContainer.insertAdjacentHTML('beforeend', templateTable());

