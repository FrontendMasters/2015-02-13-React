var React = require('react');

var alertStuff = () => {
  alert('STUFF!');
};

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>Events and State</h1>
        <button onClick={alertStuff}>Alert!</button>
      </div>
    );
  }
});

////////////////////////////////////////////////////////////////////////////////
// usually put it on the component
var App = React.createClass({
  alertStuff () {
    alert('more stuff');
  },

  render () {
    return (
      <div>
        <h1>Events and State</h1>
        <button onClick={this.alertStuff}>Alert!</button>
      </div>
    );
  }
});

////////////////////////////////////////////////////////////////////////////////
// can bind args
var App = React.createClass({
  alertStuff (msg) {
    alert(msg);
  },

  render () {
    return (
      <div>
        <h1>Events and State</h1>
        <button onClick={this.alertStuff.bind(this, 'stuff!')}>Alert!</button>
        <button onClick={this.alertStuff.bind(this, 'other stuff!')}>Other Alert!</button>
      </div>
    );
  }
});


////////////////////////////////////////////////////////////////////////////////
// lets make a content toggler
var ContentToggle = React.createClass({

  getInitialState: function() {
    return {
      showDetails: false
    };
  },

  toggle: function() {
    this.setState({
      showDetails: !this.state.showDetails
    }, this.maybeFocus);
  },

  maybeFocus: function() {
    if (this.state.showDetails)
      this.refs.details.getDOMNode().focus();
  },

  handleKeyboard: function(event) {
    if (event.key === 'Enter' || event.key === ' ')
      this.toggle();
  },

  render: function() {
    var details;
    var summaryClassName = 'ContentToggle__Summary';

    if (this.state.showDetails) {
      details = this.props.children;
      summaryClassName += ' ContentToggle__Summary--open';
    }

    return (
      <div className="ContentToggle">
        <div
          tabIndex="0"
          onClick={this.toggle}
          onKeyPress={this.handleKeyboard}
          className={summaryClassName}
        >
          {this.props.summary}
        </div>

        <div
          ref="details"
          tabIndex="-1"
          className="ContentToggle__Details"
        >
          {details}
        </div>
      </div>
    );
  }
});

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>Events and State</h1>
        <ContentToggle summary="Jerk Chicken">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </ContentToggle>
      </div>
    );
  }
});

React.render(<App/>, document.body);
