'use strict';

function submitForm() {
  var submitBtn = document.getElementById('form-sbmt');

  submitBtn.onclick = function(evt) {
    evt.preventDefault();
    console.log('submitForm');




  }
};

module.exports = submitForm;
