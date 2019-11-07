import React from 'react';

function Zergling() {
  Zergling.defaultProps = {};
  return <div>I'm a zergling.</div>;
}

function Roach() {
  return <div>I'm a roach.</div>;
}

function Hatchery(props) {
  return (
    <div>
      <h1>Hatchery</h1>
      <div>{props.children}</div>
    </div>
  );
}

export { Zergling, Roach, Hatchery };
