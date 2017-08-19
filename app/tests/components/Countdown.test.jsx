var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('set state to "start" and count down time', (done) => {
      var countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('start');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001)
    });

    it('count never goes negative', (done) => {
      var countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);
      
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001)
    });
  });

});
