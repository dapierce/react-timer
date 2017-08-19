var React = require('react');
var createReactClass = require('create-react-class');

var CountdownForm = createReactClass({
  onSubmit: function(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    // check that only digits 0-9 are used
    if(strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function() {
    return (
      <div>
        <form className="countdown-form" ref="form" onSubmit={this.onSubmit}>
          <div className="input-group">
            <input className="input-group-field" type="text" ref="seconds" placeholder="Enter time in seconds" />
            <div className="input-group-button">
              <button className="button">Start</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
