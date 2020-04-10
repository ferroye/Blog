import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router'
import combineReduer from './Component/Reducers/combineReducer'
import App from './Component/App';
// import createBrowserHistory from "./Config/History"
import { createBrowserHistory } from "history";
import { compose } from "redux";



const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  combineReduer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      < Switch >
        < App />

      </Switch >
    </Router>
  </Provider>,

  document.getElementById('root')
);
