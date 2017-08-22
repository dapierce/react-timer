var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  })

  it('should start timer on "start" status and count forward', (done) => {
    var timer = ReactTestUtils.renderIntoDocument(<Timer/>);

    timer.handleStatusChange('start');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('start');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should pause timer on "pause" status', (done) => {
    var timer = ReactTestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange('start');
    timer.handleStatusChange('pause');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('pause');
      expect(timer.state.count).toBe(10);
      done();
    }, 1001);
  });

  it('should clear count at "stop" status', (done) => {
    var timer = ReactTestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange('start');
    timer.handleStatusChange('stop');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stop');
      expect(timer.state.count).toBe(0);
      done();
    }, 1001);
  });

});