'use strict';

// редактирование поля при клике по нему
function editField() {
  var table = document.querySelector('#app .table');
  var editableFields = table.querySelectorAll('.editable');

  for(var i = 0; i < editableFields.length; i++) {
    editableFields[i].addEventListener('click', function() {
      var self = this;

      this.setAttribute('contenteditable', 'true');
      window.addEventListener('keydown', enterKeydown);

      // запрет редактирования поля при потере фокуса
      this.onblur = function() {
        self.setAttribute('contenteditable', 'false');
        window.removeEventListener('keydown', enterKeydown);
      }

      // запрет редактирования поля при нажатии enter
      function enterKeydown(evt) {
        if (evt.keyCode == 13) {
          evt.preventDefault();
          self.setAttribute('contenteditable', 'false');
          window.removeEventListener('keydown', enterKeydown);
        }
      }
    });
  }
};

module.exports = editField;
