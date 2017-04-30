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
              '<td>' + users.created + '</td>' +
            '</tr>'

            // '<input class="delete-btn" type="button" value="Удалить">'
  }).join('')

          '</table>'
}

var tableContainer = document.getElementById('app');

tableContainer.insertAdjacentHTML('beforeend', templateTable(jsonData[0]));

var table = tableContainer.querySelector('.table');
var tableBody = table.querySelector('tbody');
var tableRow = table.getElementsByTagName('tr');


for (var i = 1; i < tableRow.length; i++) {
  var btn = document.createElement('input');
  btn.setAttribute('type', 'button');
  btn.setAttribute('value', 'Удалить');
  btn.classList.add('delete-btn');

  tableRow[i].appendChild(btn);
}

var deleteRawBtn = table.querySelectorAll('.delete-btn');

for (var p = 0; p < deleteRawBtn.length; p++) {
  deleteRawBtn[p].addEventListener('click', function() {
    var tr = this.parentNode;
    tableBody.removeChild(tr);
  });
}














