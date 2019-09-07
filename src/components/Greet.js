import React from 'react';

// function Greet() {
//     return (
//         <h1>hello abdalah</h1>
//     )
// }
// const Greet = props => {
//   console.log(props);
//   //   props.name = 'abdalah'; //Cannot assign to read only property 'name' of object '#<Object>'

//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.heroName}{' '}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

//using Destructuring
const Greet = props => {
  const { name, heroName, children } = props;
  // console.log(props);
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  );
};
export default Greet;
