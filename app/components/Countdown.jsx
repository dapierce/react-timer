var React = require('react');
var createReactClass = require('create-react-class');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
        case 'stop':
          this.setState({count: 0});
        case 'pause':
          clearInterval(this.timer);
          this.timer = undefined;
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
  handleStatusChange: function(newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  render: function() {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if(countdownStatus !== 'stop') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };

    return (
      <div>
        <h1 className="page-header">Countdown</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    )
  }
});

module.exports = Countdown;
