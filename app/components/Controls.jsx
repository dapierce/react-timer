var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var Controls = createReactClass({
  propTypes: {
    countdownStatus: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function() {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus === 'start') {
        return <button className="button secondary" onClick={this.onStatusChange('pause')}>Pause</button>
      } else if (countdownStatus === 'pause') {
        return <button className="button primary" onClick={this.onStatusChange('start')}>Start</button>
      }
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stop')}>Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
