var React = require('react');
var expect = require('chai').expect;

var ParentComponent = require('../ParentComponent.jsx');

describe('ParentComponent', function() {

  var childType = '<div class="child-component"></div>';

  it('should render with child', function() {
    var markup = React.renderToStaticMarkup(<ParentComponent />);

    expect(markup).to.contains(childType);

  });

  it('should render without child', function() {
    var markup = React.renderToStaticMarkup(<ParentComponent standalone={true} />);

    expect(markup).to.not.contains(childType);
  });

});
