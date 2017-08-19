var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown when seconds input is valid number', () => {
    var spy = expect.createSpy();
    var countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '125';
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(125);
  });

  it('should not call onSetCountdown when seconds input is invalid', () => {
    var spy = expect.createSpy();
    var countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '125jk';
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
