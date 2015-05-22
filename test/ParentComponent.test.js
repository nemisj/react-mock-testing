var React = require('react');
var expect = require('chai').expect;
var rewire = require('rewire');

var ParentComponent = rewire('../ParentComponent.jsx');

function getMock(componentName) {
  return React.createClass({
    render: function () {
      return React.createElement(componentName);
    }
  });
}

var ChildMock = getMock('ChildComponent');

ParentComponent.__set__('Child', ChildMock);

describe('ParentComponent', function() {

  var childType = React.renderToStaticMarkup(<ChildMock />);

  it('should render with child', function() {
    var markup = React.renderToStaticMarkup(<ParentComponent />);

    expect(markup).to.contains(childType);

  });

  it('should render without child', function() {
    var markup = React.renderToStaticMarkup(<ParentComponent standalone={true} />);

    expect(markup).to.not.contains(childType);
  });

});
