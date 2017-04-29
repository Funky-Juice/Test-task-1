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

var content = function content(data) {
  return '<p class="game__task">' + data.task + '</p>\n <form class="game__content">\n\n' +

    data.gameOption.map(function (gameOption) {
      return '<div class="game__option">\n <img src="' + gameOption.image + '" alt="' + gameOption.alt + '" width="468" height="458">\n\n' +

        gameOption.answerParams.map(function (param) {
          return '<label class="game__answer  ' + param.class + '">\n <input name="' + param.name + '" type="radio" value="' + param.value + '">\n <span>' + param.text + '</span>\n </label>';
        }).join('') + '\n\n </div>';
    }).join('') + '\n  </form>';
};


var templateTable = function(data) {
  return '<table class="table">' +
            '<tr>' +
              '<th>id</th>' +
              '<th>name</th>' +
              '<th>login</th>' +
              '<th>e-mail</th>' +
              '<th>created</th>' +
            '</tr>' +
            '<tr>' +
              '<td>' + data.users[0].id + '</td>' +
              '<td>' + data.users[0].name + '</td>' +
              '<td>' + data.users[0].login + '</td>' +
              '<td>' + data.users[0].email + '</td>' +
              '<td>' + data.users[0].created + '</td>' +
            '</tr>' +

              data.users.map(function(users) {
                '<tr>' +
                  '<td>' + users.id + '</td>' +
                  '<td>' + users.name + '</td>' +
                  '<td>' + users.login + '</td>' +
                  '<td>' + users.email + '</td>' +
                  '<td>' + users.created + '</td>' +
                '</tr>'
              }).join('')

          '</table>'
}

var tableContainer = document.getElementById('app');
// console.log(jsonData[0].users[0].name);

console.log(jsonData[0].users.map(function(users) {
    console.log(users.name);
})
);

tableContainer.insertAdjacentHTML('beforeend', templateTable(jsonData[0]));

