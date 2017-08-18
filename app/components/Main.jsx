var React = require('react');

var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <p>Main.jsx rendered</p>
      <div>
        {props.children}
      </div>
    </div>
  );
}

module.exports = Main;
