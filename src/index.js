import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from './reducers/index'
import Questionnaire from './components/Questionnaire'
import NationalCharts from './components/NationalCharts'
import Login from './components/Login'
// import thunk from 'redux-thunk';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route path="/Questionnaire" component={Questionnaire} />
        <Route path="/NationalCharts" component={NationalCharts} />
        <Route path="/Login" component={Login} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  // document.getElementById('container')
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
