'use strcit';

var jsonData = [{
  "users": [
    {
      "id": 1,
      "name": "Иванов Иван",
      "login": "Ivan1988",
      "email": "Ivan1988@fake.com",
      "created": "2017-04-29T09:35:30.666Z"
    },
    {
      "id": 2,
      "name": "Петров Петр",
      "login": "PetyaPetushok1986",
      "email": "PetyaPetushok@fake.com",
      "created": "2017-04-20T09:35:30.666Z"
    },
    {
      "id": 3,
      "name": "Содоров Сидор",
      "login": "Sidor1985",
      "email": "SidorFedor@fake.com",
      "created": "2017-03-18T09:35:30.666Z"
    }
  ]
}]

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

// добавляем в разметку таблицу из шаблона с добавленными данными из json
tableContainer.insertAdjacentHTML('beforeend', templateTable(jsonData[0]));


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



