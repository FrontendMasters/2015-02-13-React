var React = require('react');
var md5 = require('MD5');
var validateEmail = require('./validateEmail');
var warning = require('react/lib/warning');

var GRAVATAR_URL = "http://gravatar.com/avatar";
var USERS = [
  { id: 1, name: 'Ryan Florence', email: 'rpflorencegmail.com' },
  { id: 2, name: 'Michael Jackson', email: 'mjijackson@gmail.com' }
];

////////////////////////////////////////////////////////////////////////////////
// Props are a lot like element attributes
var element = <input type="checkbox" required="true" />;
var element = React.DOM.input({type: 'checkbox', required: true});

////////////////////////////////////////////////////////////////////////////////
// we use them in images
var App = React.createClass({
  render () {
    var users = USERS.map((user) => {
      var size = 36;
      var hash = md5(user.email);
      var url = `${GRAVATAR_URL}/${hash}?s=${size*2}`;
      return (
        <li>
          <img src={url} width={size} /> {user.name}
        </li>
      );
    });
    return (
      <div>
        <h1>Users</h1>
        <ul>{users}</ul>
      </div>
    );
  }
});

////////////////////////////////////////////////////////////////////////////////
// sometimes componets get too big, refactor just like functions
var Gravatar = React.createClass({
  render () {
    var { user, size } = this.props;
    var hash = md5(user.email);
    var url = `${GRAVATAR_URL}/${hash}?s=${size*2}`;
    return <img src={url} width={size} />;
  }
});

var App = React.createClass({
  render () {
    var users = USERS.map((user) => {
      return <li><Gravatar user={user} size={36} /> {user.name}</li>
    });
    return (
      <div>
        <h1>Users</h1>
        <ul>{users}</ul>
      </div>
    );
  }
});

////////////////////////////////////////////////////////////////////////////////
// we can validate propTypes to help others consume our components
var Gravatar = React.createClass({
  propTypes: {
    user: React.PropTypes.shape({
      email: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired
    }).isRequired
  },

  render () {
    var { user, size } = this.props;
    var hash = md5(user.email);
    var url = `${GRAVATAR_URL}/${hash}?s=${size*2}`;
    return <img src={url} width={size} />;
  }
});

var App = React.createClass({
  render () {
    var users = USERS.map((user) => {
      return <li><Gravatar user={user} size={36} /> {user.name}</li>
    });
    return (
      <div>
        <h1>Users</h1>
        <ul>{users}</ul>
      </div>
    );
  }
});

////////////////////////////////////////////////////////////////////////////////
// we can create our own propTypes
var emailType = (props, propName, componentName) => {
  warning(
    validateEmail(props.email),
    `Invalid email '${props.email}' sent to 'Gravatar'. Check the render method of '${componentName}'.`
  );
};

var Gravatar = React.createClass({
  propTypes: {
    user: React.PropTypes.shape({
      email: emailType,
      name: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired
    }).isRequired
  },

  render () {
    var { user, size } = this.props;
    var hash = md5(user.email);
    var url = `${GRAVATAR_URL}/${hash}?s=${size*2}`;
    return <img src={url} width={size} />;
  }
});

var App = React.createClass({
  render () {
    var users = USERS.map((user) => {
      return <li><Gravatar user={user} size={36} /> {user.name}</li>;
    });
    return (
      <div>
        <h1>Users</h1>
        <ul>{users}</ul>
      </div>
    );
  }
});

React.render(<App/>, document.body);

