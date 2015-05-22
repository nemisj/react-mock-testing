var React = require('react');
var expect = require('chai').expect;
var rewire = require('rewire');

var ParentComponent = rewire('../ParentComponent.jsx');
var DOMProperty = require('react/lib/DOMProperty.js');

var createAttributes = function (props) {
  var attrs = {};

  Object.keys(props).forEach(function (key) {
    var attrName = DOMProperty.isStandardName[key] ? key : ('data-' + key.toLowerCase());
    attrs[attrName] = props[key];
  });

  return attrs
}

function getMock(componentName) {
  return React.createClass({
    render: function() {
      var attrs = createAttributes(this.props);
      return React.createElement(componentName, attrs);
    }
  });
}


var ChildMock = getMock('ChildComponent');

ParentComponent.__set__('Child', ChildMock);

describe('ParentComponent', function() {

  var childType = React.renderToStaticMarkup(<ChildMock childName="Name of the child"/>);

  it('should render with child', function() {
    var markup = React.renderToStaticMarkup(<ParentComponent />);

    expect(markup).to.contains(childType);

  });

});
