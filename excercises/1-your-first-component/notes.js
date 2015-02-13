var React = require('react');

////////////////////////////////////////////////////////////////////////////////
React.render(React.DOM.div({}, 'hello'), document.body);

////////////////////////////////////////////////////////////////////////////////
var { div } = React.DOM;
var element = div({}, 'hello');
React.render(element, document.body);

////////////////////////////////////////////////////////////////////////////////
var { div, ul, li } = React.DOM;
var element = div({},
                  h1({}, 'hello!'),
                  ul({},
                     li({}, 'one'),
                     li({}, 'two'),
                     li({}, 'three')
                    )
                 );

////////////////////////////////////////////////////////////////////////////////
var items = ['one', 'two', 'three'];
var element = div({},
                  h1({}, 'hello!'),
                  ul({}, items.map(item => li({}, item)))
                 );


////////////////////////////////////////////////////////////////////////////////
var element = (
  <div>
    <h1>hello!</h1>
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ul>
  </div>
);

////////////////////////////////////////////////////////////////////////////////
var element = (
  <div>
    <h1>hello!</h1>
    <ul>
      {items.map((item) => <li>{item}</li>)}
    </ul>
  </div>
);

////////////////////////////////////////////////////////////////////////////////
var items = items.sort().map((item) => <li>{item}</li>);
var element = (
  <div>
    <h1>hello!</h1>
    <ul>{items}</ul>
  </div>
);


////////////////////////////////////////////////////////////////////////////////
var App = React.createClass({
  render () {
    var items = items.sort().map((item) => <li>{item}</li>);
    return (
      <div>
        <h1>hello!</h1>
        <ul>{items}<ul>
      </div>
    );
  }
});

