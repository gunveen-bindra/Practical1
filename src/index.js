import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import {App2}  from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Pizza from './Pizza';
//import Dropdown from './Dropdown';
//import ClockUpdate from './Clockupdate';
//import Square from './Game';
//import Board from './Game';
//import Card from'./Image';
//import List_value from './ListIterator';
import ErrorPage from "./TestError.js";
//function update(){
  /*ReactDOM.render(
    <React.StrictMode>*/
      /*<Table />
      <Table_had />
      <Pizza />
      <Dropdown />
      <App2 />*/
      /*<ClockUpdate />
    <React.StrictMode>,
    document.getElementById('root')
  );
}*/
ReactDOM.render(
  <React.StrictMode>
    {/*<Board />
    <Card />*/}
    <ErrorPage />
    {/*<List_value />
    <App />
    <Dropdown />*/}
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
//setInterval(update,1000);
//reportWebVitals();
//ReactDOM.render(<App />, document.getElementById('App'));
/*import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Table_had, { Table} from './Table';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home />
    <About />
    <Contact />
    <Error />
    <Navigation />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/