import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './css/appStyles.css';
import styles from './css/appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
// import './css/appStyles.module.css';// cant use class inside

class App extends Component {
  render() {
    return (
      <div className="App">
        <LifeCycleA />
        {/*<Form />*/}
        {/*<h1 className="error">Error</h1>*/}
        {/*<h1 className={styles.sucess}>Sucesss</h1>*/}
        {/*<h1 className="sucess">Sucesss</h1> // if styles.module can not use class without import styles from './css/appStyles.module.css';*/}
        {/*<Inline />*/}
        {/*<Stylesheet primary={true} />*/}
        {/*<NameList />*/}
        {/*<UserGreeting />*/}
        {/*<ParentComponent />*/}
        {/*<EventBind />*/}
        {/*<FunctionClick />*/}
        {/*<ClassClick />*/}
        {/*<Greet name="Diana" heroName="Wonder Woman">
          <p>this is children in destructuring</p>
    </Greet>*/}

        {/* <Welcome name="Bruce" heroName="Batman" />*/}

        {/*<Counter></Counter>}
        {/*<Message></Message>}
        {/*<Greet name="Bruce" heroName='Batman' >
          <p>this is children props</p>
        </Greet>}
        <Greet name="Clark" heroName='Superman' >
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName='Wonder Woman' />
        <Welcome name="Bruce" heroName='Batman' />
        <Welcome name="Clark" heroName='Superman' />
        <Welcome name="Clark" heroName='Superman' />
        {/* <Hello />*/}
      </div>
    );
  }
}

export default App;
