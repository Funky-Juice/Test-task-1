'use strict';

var addRow = require('./template-row');

var data = {
  "data": [
    {
      "id": 1,
      "name": "Иванов Иван",
      "login": "Ivan1988",
      "e-mail": "Ivan1988@fake.com",
      "created": "2017-04-29T09:35:30.666Z"
    }
  ]
}


function submitForm() {
  var submitBtn = document.getElementById('form-sbmt');

  submitBtn.onclick = function(evt) {
    evt.preventDefault();
    console.log('submitForm');

    addRow(data);
  }
};

module.exports = submitForm;









