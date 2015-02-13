var xhr = require('../lib/xhr');
var { API, ActionTypes } = require('../Constants');
var ServerActionCreators = require('../actions/ServerActionCreators');

var ApiUtils = {
  loadContacts () {
    xhr.getJSON(`${API}/contacts`, (err, res) => {
      ServerActionCreators.loadedContacts(res.contacts);
    });
  },

  deleteContact (contact) {
    xhr.deleteJSON(`${API}/contacts/${contact.id}`, (err, res) => {
      ServerActionCreators.deletedContact(contact);
    });
  }
};

module.exports = ApiUtils;

