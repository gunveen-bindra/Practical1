import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;

/*function App() {

  return (
    <div className="App">
      <h1>hellow</h1>
    </div>
  );
}
*/
/*
function App2() {
  let e = 'its'
  let element = <pizza type={e}></pizza>;
  e = 'ami';
    element.props.type.push({
     type: 'American'
   }); 
  const greeting = element.props.type;
  const date = new date()
  //const abc = <h1>{date.toLocaleTimeString()}</h1>;
  //const abc = <h1>{greeting} world </h1>;
  const abc = <h1>{date.toLocaleTimeString()}</h1>
  return abc;
}
*/
/*function App2() {
  const date = new Date()
  //const abc = <h1>{date.toLocaleTimeString()}</h1>;
  //const abc = <h1>{greeting} world </h1>;
  const abc = <h1>{date.toLocaleTimeString()}</h1>
  return abc;
}
*/
//export default App
//export { App2 };

//import logo from './logo.svg';
/*import './App.css';
import React, { Component } from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
export default App;
*/
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
