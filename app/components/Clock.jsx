var React = require('react');
var createReactClass = require('create-react-class');
import PropTypes from 'prop-types';

var Clock = createReactClass({
  getDefaultProps: function() {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: PropTypes.number
  },
  // take a number of seconds, convert to 00:00 time
  formatSeconds: function(totalSeconds) {
    var hours, minutes, seconds;

    seconds = totalSeconds % 60;
    minutes = Math.floor(totalSeconds / 60);
    if(minutes > 59) {
      hours = Math.floor(minutes / 60);
      minutes = minutes - hours * 60;
    }

    // format numbers with leading 0 if single digit
    if(hours > 0 && hours < 10) {
      hours = '0' + hours;
    }
    if(minutes < 10) {
      minutes = '0' + minutes;
    }
    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    if(hours !== undefined) {
      return hours + ':' + minutes + ':' + seconds;
    }
    return minutes + ':' + seconds;
  },
  render: function () {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    )
  }
});

module.exports = Clock;
