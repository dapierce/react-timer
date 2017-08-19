var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var Controls = createReactClass({
  propTypes: {
    countdownStatus: PropTypes.string.isRequired
  },
  render: function() {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus === 'start') {
        return <button className="button secondary">Pause</button>;
      } else if (countdownStatus === 'pause') {
        return <button className="button primary">Start</button>;
      }
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
