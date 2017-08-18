var React = require('react');
var createReactClass = require('create-react-class');

var Clock = require('Clock');

var Countdown = createReactClass({
  render: function() {
    return (
      <div>
        <h1 className="page-header">Countdown</h1>
        <Clock totalSeconds={60}/>
      </div>
    )
  }
});

module.exports = Countdown;
