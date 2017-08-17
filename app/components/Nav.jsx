var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <nav className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer
          </li>
          <li>
            <IndexLink to="/">Timer</IndexLink>
          </li>
          <li>
            <IndexLink to="/">Countdown</IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://github.com/dapierce/">David Pierce</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

module.exports = Nav;
