import React, { Component } from 'react';
import Router from './routes';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { ConfigureStore } from './redux/configureStore';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      {/* <Provider store={store}> */}
        <BrowserRouter>
          <div>
          <Router />
          </div>
        </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
