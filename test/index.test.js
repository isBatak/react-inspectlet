const chai = require('chai');
const ReactInspectlet = require('../src/index').default.ReactInspectlet;

// Tell chai that we'll be using the "should" style assertions.
chai.should();

describe('react-inspectlet', function() {

  beforeEach(function() {
    this.jsdom = require('jsdom-global')()
  });

  afterEach(function() {
    this.jsdom()
  });

  describe('initialize()', function() {

    it('wid shuld be equal to foo', function() {
      ReactInspectlet.initialize('foo');
      window.__insp[0].should.eql(['wid', 'foo']);
    });

    it('window.__inspld should be 1', function() {
      ReactInspectlet.initialize('foo');
      window.__inspld.should.eql(1);
    });
  });

  describe('virtualPage()', function() {
    it('virtualPage is initialized', function() {
      ReactInspectlet.initialize('foo');
      ReactInspectlet.virtualPage();
      window.__insp[1].should.eql(['virtualPage']);
    });
  });
});
