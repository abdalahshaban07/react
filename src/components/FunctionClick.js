import React from 'react';

function FunctionClick() {
  function clickHandeler() {
    console.log('Button Clieked');
  }
  return (
    <div>
      <button onClick={clickHandeler}>click</button>
    </div>
  );
}

export default FunctionClick;
