// add toggleAll
// need isOpen
// state gets out of whack

var React = require('react');

var ContentToggle = React.createClass({

  toggle () {
    this.props.onToggle();
  },

  componentDidUpdate () {
    if (this.props.isOpen)
      this.refs.details.getDOMNode().focus();
  },

  handleKeyboard (event) {
    if (event.key === 'Enter' || event.key === ' ')
      this.toggle();
  },

  render () {
    var details;
    var summaryClassName = 'ContentToggle__Summary';

    if (this.props.isOpen) {
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
  getInitialState () {
    return {
      openAll: false,
      toggleStates: {
        jerk: false,
        tacos: false
      }
    };
  },

  toggleAll () {
    var { toggleStates, openAll } = this.state;
    var newOpenAll = !openAll;
    var newStates = Object.keys(toggleStates).reduce((newStates, key) => {
      newStates[key] = newOpenAll;
      return newStates;
    }, {});
    this.setState({
      toggleStates: newStates,
      openAll: newOpenAll
    });
  },

  handleToggle (id) {
    var { toggleStates } = this.state;
    toggleStates[id] = !toggleStates[id];
    this.setState({ toggleStates });
    var keys = Object.keys(toggleStates);
    var areOpen = keys.filter(key => toggleStates[key]);
    if (areOpen.length === keys.length) {
      this.setState({ openAll: true });
    }
    else if (areOpen.length === 0) {
      this.setState({ openAll: false });
    }
  },

  render () {
    return (
      <div>
        <h1>Events and State</h1>
        <button onClick={this.toggleAll}>Toggle All</button>

        <div style={{margin: '20px 0'}}>
          <ContentToggle
            summary="Jerk Chicken"
            isOpen={this.state.toggleStates.jerk}
            onToggle={this.handleToggle.bind(this, 'jerk')}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </ContentToggle>

          <ContentToggle
            summary="Tacos"
            isOpen={this.state.toggleStates.tacos}
            onToggle={this.handleToggle.bind(this, 'tacos')}
          >
            <p>Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
          </ContentToggle>
        </div>
      </div>
    );
  }
});

React.render(<App />, document.body);

