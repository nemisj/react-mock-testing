var React = require('react');

module.exports = React.createClass({
  displayName: 'ChildComponent',

  render: function() {
    return (
      <div className="child-component">
        this.props.childName
      </div>
    );
  }
});
