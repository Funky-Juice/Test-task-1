'use strict';

// добавляем строкам таблицы кнопки для удаления строк
function createRowBtn() {
  var table = document.querySelector('#app .table');
  var tableBody = table.querySelector('tbody');
  var tableRow = table.getElementsByTagName('tr');

  // создаем кнопки
  for (var i = 1; i < tableRow.length; i++) {
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', 'Удалить');
    btn.classList.add('delete-btn');

    tableRow[i].appendChild(btn);
  }

  var deleteRawBtn = table.querySelectorAll('.delete-btn');

  // навешиваем обработчик события
  for (var p = 0; p < deleteRawBtn.length; p++) {
    deleteRawBtn[p].addEventListener('click', function() {
      var tr = this.parentNode;
      tableBody.removeChild(tr);
    });
  }
};

module.exports = createRowBtn;
