import React from 'react';
import '../css/myStyles.css';

function Stylesheet(props) {
  const { primary } = props;
  let className = primary ? 'primary' : 'secondary';
  return (
    <div>
      <h2 className={`${className} font-xl`}>Stylesheet</h2>
    </div>
  );
}

export default Stylesheet;
