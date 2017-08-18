var React = require('react');
var createReactClass = require('create-react-class');

var Clock = require('Clock');

var Timer = createReactClass({
  render: function() {
    return (
      <div>
        <h1 className="page-header">Timer</h1>
        <Clock totalSeconds={0}/>
      </div>
    )
  }
});

module.exports = Timer;
