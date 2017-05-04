'use strict';

var validateForm = require('./validate-form');
var addRow = require('./template-row');

function getFormValues() {
  var userForm = document.querySelector('#app .user-form');

  var formData = {};

  formData.name = userForm.querySelector('input[name="user_name"]').value;
  formData.login = userForm.querySelector('input[name="user_login"]').value;
  formData["e-mail"] = userForm.querySelector('input[name="user_e-mail"]').value;
  formData["reg-date"] = userForm.querySelector('input[name="user_reg-date"]').value;

  return formData;
}

function submitForm() {
  var submitBtn = document.getElementById('form-sbmt');

  submitBtn.onclick = function(evt) {
    evt.preventDefault();

    validateForm();

    var formData = getFormValues();
    addRow(formData);

    document.querySelector('#app .user-form').reset();
  }
};

module.exports = submitForm;
