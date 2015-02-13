var { ActionTypes } = require('../Constants');
var ApiUtil = require('../utils/ApiUtil');

var ViewActionCreators = {
  loadContacts () {
    ApiUtil.loadContacts();
  }
};

module.exports = ViewActionCreators;

