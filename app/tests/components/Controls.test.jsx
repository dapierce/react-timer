var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {

    it('shows Pause button when in "start" state', () => {
      var controls = ReactTestUtils.renderIntoDocument(<Controls countdownStatus="start"/>);
      var $el =  $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('shows Start button when in "pause" state', () => {
      var controls = ReactTestUtils.renderIntoDocument(<Controls countdownStatus="pause"/>);
      var $el =  $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
