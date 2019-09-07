import React from 'react';

const heading = {
  fontSize: '72px',
  color: 'blue'
};

function Inline() {
  return (
    <div>
      {/*<h1 className="error">Error In Inline</h1> will be like h1 in App.js because Inline.js is child of App.js* if you want using style in spicefic component use style module concept*/}
      <h1 style={heading}>Inline</h1>
    </div>
  );
}

export default Inline;
