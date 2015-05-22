var React = require('react');

var Child = require('./ChildComponent.jsx');

module.exports = React.createClass({
  displayName: 'ParentComponent',

  renderChildren: function() {

    if (this.props.standalone === true) {
      return null;
    } else {
      return <Child />;
    }

  },

  render: function() {
    return (
      <div className="parent-component">
        {this.renderChildren()}
      </div>
    );
  }
});
