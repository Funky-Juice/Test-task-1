'use strict';

var utils = require('./utils');
var renderTable = require('./template-table');

var DATA_URL = 'http://localhost:3000/db';

// добавляем в DOM таблицу из шаблона с загруженными данными из json
utils.callbackLoad(DATA_URL, renderTable);
