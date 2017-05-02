'use strcit';

// загрузка данных с сервера
function callbackLoad(callback) {
  var xhr = new XMLHttpRequest();
  var loadedData = [];

  xhr.addEventListener('load', function(evt) {
    try {
      loadedData = JSON.parse(evt.target.response);
      callback(loadedData);
    } catch (err) {
      console.log(err);
    }
  });

  xhr.open('GET', 'http://localhost:3000/db');
  xhr.timeout = 5000;
  xhr.send();
}

// шаблон таблицы
var templateTable = function(data) {
  return '<table class="table">' +
            '<tr>' +
              '<th>id</th>' +
              '<th>name</th>' +
              '<th>login</th>' +
              '<th>e-mail</th>' +
              '<th>created</th>' +
            '</tr>' +

  data.users.map(function(users) {
    return '<tr>' +
              '<td>' + users.id + '</td>' +
              '<td>' + users.name + '</td>' +
              '<td>' + users.login + '</td>' +
              '<td>' + users.email + '</td>' +
              '<td>' + formatDate(users.created) + '</td>' +
            '</tr>'
  }).join('')

          '</table>'
}

// форматирование даты
function formatDate(data) {
  var msUTC = Date.parse(data);
  var date = new Date(msUTC);

  function getMonthName(date) {
    var months = ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'];

    return months[date.getMonth()];
  }

  var newData = date.toLocaleString('ru', {weekday: 'short'}) + ', ' + date.getDate() + ' ' + getMonthName(date) + ' ' + date.getFullYear() + ' г.';
  return(newData);
}


var tableContainer = document.getElementById('app');


var showTable = function(data) {
  tableContainer.insertAdjacentHTML('beforeend', templateTable(data));
}

// добавляем в разметку таблицу из шаблона с добавленными данными из json
callbackLoad(showTable);

var table = tableContainer.querySelector('.table');
var tableBody = table.querySelector('tbody');
var tableRow = table.getElementsByTagName('tr');

// добавляем строкам таблицы кнопки для удаления строк
for (var i = 1; i < tableRow.length; i++) {
  var btn = document.createElement('input');
  btn.setAttribute('type', 'button');
  btn.setAttribute('value', 'Удалить');
  btn.classList.add('delete-btn');

  tableRow[i].appendChild(btn);
}

var deleteRawBtn = table.querySelectorAll('.delete-btn');

// навешиваем обработчик события на кнопки
for (var p = 0; p < deleteRawBtn.length; p++) {
  deleteRawBtn[p].addEventListener('click', function() {
    var tr = this.parentNode;
    tableBody.removeChild(tr);
  });
}



