var React = require('react');

var Child = require('./ChildComponent.jsx');

module.exports = React.createClass({
  displayName: 'ParentComponent',

  renderChildren: function() {
    return <Child childName="Name of the child"/>;
  },

  render: function() {
    return (
      <div className="parent-component">
        {this.renderChildren()}
      </div>
    );
  }
});
