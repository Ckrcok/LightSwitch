import React from "react";

function Bottom(props) {
  return (
    <div>
      <button onClick={props.handleButtonOn}>On</button>
      <button onClick={props.handleButtonOff}>Off</button>
    </div>
  );
}

export default Bottom;
