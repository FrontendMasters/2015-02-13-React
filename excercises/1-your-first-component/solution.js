require('./tests');
var React = require('react');
var sortBy = require('sort-by');

// Render this data to the page
// - put the title in an h1
// - only render mexican food (hint: DATA.items.filter())
// - sort the items in alphabetical order by name
//   (hint: use sort-by https://github.com/staygrimm/sort-by#example)

var DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'hush puppies', type: 'southern' }
  ]
};

var Menu = React.createClass({
  render () {
    var items = DATA.items.filter((item) => {
      return item.type === 'mexican';
    })
    .sort(sortBy('name'))
    .map((item) => {
      return <li key={item.id}>{item.name}</li>;
    });
    return (
      <div>
        <h1>{DATA.title}</h1>
        <ul>{items}</ul>
      </div>
    );
  }
});

React.render(<Menu/>, document.body, () => {
  require('./tests').run();
});

