import React, { Component } from 'react';

// class ChildComponent extends Component {
//   render() {
//     const { greetHandler } = this.props;
//     return (
//       <div>
//         <button onClick={greetHandler}> Greet Parent</button>
//       </div>
//     );
//   }
// }
function ChildComponent(props) {
  const { greetHandler } = props;
  return (
    <div>
      <button onClick={() => greetHandler('child')}> Greet Parent</button>
    </div>
  );
}

// export default ChildComponent

export default ChildComponent;
