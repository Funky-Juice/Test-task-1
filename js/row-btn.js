'use strict';

// добавляем строкам таблицы кнопки для удаления этих строк
function createRowBtn() {
  var table = document.querySelector('#app .table');
  var tableBody = table.querySelector('tbody');
  var tableRow = table.getElementsByTagName('tr');
  var deleteBtn = table.querySelectorAll('.delete-btn');

  // проверка наличия и удаление всех кнопок перед их добавлением в таблицу
  if(deleteBtn.length !== 0) {

    for (var q = 0; q < deleteBtn.length; q++){
      deleteBtn[q].removeEventListener('click', deleteRaw);
      deleteBtn[q].parentNode.removeChild(deleteBtn[q]);
    };
  };

  // создаем кнопки
  for (var i = 1; i < tableRow.length; i++) {
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', 'Удалить');
    btn.classList.add('delete-btn');
    btn.addEventListener('click', deleteRaw);

    tableRow[i].appendChild(btn);
  };

  function deleteRaw() {
    var elem = this.parentNode;
    tableBody.removeChild(elem);
  };
};

module.exports = createRowBtn;
