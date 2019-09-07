import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello'
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: 'goodbye'
  //     });
  //     console.log(this);
  //   }

  clickHandler = () => {
    this.setState({
      message: 'GoodBye'
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}{' '}
        {/*not good in preformance*/}
        {/*<button onClick={() => this.clickHandler()}>Click</button>*/}{' '}
        {/* good */}
        {/*<button onClick={this.clickHandler}>Click</button>*/}{' '}
        {/*binding in construct best optioin*/}
        <button onClick={this.clickHandler}>Click</button> {/*good  */}
      </div>
    );
  }
}

export default EventBind;
