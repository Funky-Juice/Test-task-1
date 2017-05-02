'use strict';

module.exports = {

  // загрузка данных с сервера
  callbackLoad: function(url, callback) {
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

  xhr.open('GET', url);
  xhr.timeout = 5000;
  xhr.send();
  },

  // форматирование даты
  formatDate: function(data) {
  var msUTC = Date.parse(data);
  var date = new Date(msUTC);

  function getMonthName(date) {
    var months = ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'];

    return months[date.getMonth()];
  }

  var newData = date.toLocaleString('ru', {weekday: 'short'}) + ', ' + date.getDate() + ' ' + getMonthName(date) + ' ' + date.getFullYear() + ' г.';
  return(newData);
  }
};
