import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    /// first way in coditonal render (element variables)
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div> Welcome abdalah</div>;
    // } else {
    //   message = <div> Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    ///
    /// second way in conditional render (if/else)
    // if (this.state.isLoggedIn) {
    //   return <div>Welcom Vishwas</div>;
    // } else {
    //   return <div>Welcom Guest</div>;
    // }
    // return (
    //   <div>
    //     <div> Welcome abdalah</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
    /////
    ///third way in conditional render (ternary conditional operator) benfits it can use inside JSX
    return this.state.isLoggedIn ? (
      <div>Welcome abdalah</div>
    ) : (
      <div>Welcome Guest</div>
    );
    ////
    ///Fourth way in conditional render (short circuit operater)
    // return this.state.isLoggedIn && <div>Welcome abdalah</div>;
  }
}

export default UserGreeting;
