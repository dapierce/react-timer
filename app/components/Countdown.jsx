var React = require('react');
var createReactClass = require('create-react-class');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = createReactClass({
  getInitialState: function() {
    return{
      count: 0,
      countdownStatus: 'stop'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    // check if state has changed
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'start':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'start'
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
