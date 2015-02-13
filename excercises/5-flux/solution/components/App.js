var React = require('react');
var ContactsStore = require('../stores/ContactsStore');
var ViewActionCreators = require('../actions/ViewActionCreators');

var App = React.createClass({
  getInitialState () {
    return ContactsStore.getState();
  },

  componentDidMount () {
    ContactsStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadContacts();
  },

  componentWillUnmount () {
    ContactsStore.removeChangeListener(this.handleStoreChange);
  },

  handleStoreChange () {
    this.setState(ContactsStore.getState());
  },

  deleteContact (contact) {
    ViewActionCreators.deleteContact(contact);
  },

  renderContacts () {
    return this.state.contacts.map((contact) => {
      return <li>
        {contact.first} {contact.last}
        <button onClick={this.deleteContact.bind(this, contact)}>
          delete
        </button>
      </li>;
    });
  },

  render () {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul>{this.renderContacts()}</ul>
      </div>
    );
  }
});

module.exports = App;

