var React = require('react');
var createReactClass = require('create-react-class');

var Clock = require('Clock');
var Controls = require('Controls');

var Timer = createReactClass({
  getInitialState: function() {
    return{
      count: 0,
      timerStatus: 'stop'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    // check if state has changed
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'start':
          this.startTimer();
          break;
        case 'stop':
          this.setState({
            count: 0,
          });
        case 'pause':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  },
  handleStatusChange: function(newStatus) {
    this.setState({timerStatus: newStatus});
  },
  render: function() {
    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;
