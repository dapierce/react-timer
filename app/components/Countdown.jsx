var React = require('react');
var createReactClass = require('create-react-class');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = createReactClass({
  getInitialState: function() {
    return{count: 60};
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds
    });
  },
  render: function() {
    var {count} = this.state;

    return (
      <div>
        <h1 className="page-header">Countdown</h1>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
});

module.exports = Countdown;
