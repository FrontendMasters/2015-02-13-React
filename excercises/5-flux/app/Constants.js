var keyMirror = require('react/lib/keyMirror');

module.exports = {
  API: 'http://localhost:3000',

  ActionTypes: keyMirror({
    CONTACTS_LOADED: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};

