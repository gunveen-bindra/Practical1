import logo from './logo.svg';
import './App.css';
import {ThemeContext} from './theme-context'
import React from 'react'
function App() {
const {theme, toggle, dark } = React.useContext(ThemeContext)
  return (
    <div className="App">
      <header className="App-header" style = {{backgroundColor: theme.backgroundColor, color: theme.color}} >
        <button
        type = "button"
        onClick = {toggle}
        style = {{backgroundColor: theme.backgroundColor, color: theme.color}}>
          Click here to toggle to {!dark ? 'dark': 'light'} theme
          </button>
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
/*
class Form extends Component {
  state = { username:'Enter github username',
  //res_name:''
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    const axios = require('axios');
     const response = await axios.get(`https://api.github.com/users/${this.state.username}` )
     //const response = await axios.get(`https://api.github.com/users/${this.state.username}` );
    //const all_data = return_response.data
    //console.log(all_data)

    //alert(response.data)
    //console.log(response.data.login)
    console.log(response)
  }
  render() {
    return(
      <form onSubmit = {this.handleSubmit}>
        <input type ="text" placeholder = "Enter your name" value = {this.state.username} 
        onChange = {event => this.setState({username: event.target.value})}/>
        <button>Submit</button>
        
      </form>
    );
  }
}

function App() {
  return(
    <Form>

    </Form>
  )
}
export default App;
*/
/*
function App() {
  return (
    <div className="App">
      <header className="App-header" style = {{backgroundColor: theme.backgroundColor,color:theme}}>
        <button
        type = "button"
        onClick = {toggle}
        style = {{backgroundColor: theme.backgroundColor, color:theme}}>
          Click here to toggle to  {!dark ? 'dark ': 'light'} theme
          </button>
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

*/


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
