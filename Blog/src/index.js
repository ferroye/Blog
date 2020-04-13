import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router'
import combineReduer from './Component/Reducers/combineReducer'
import { createBrowserHistory } from "history";
import { compose } from "redux";
import { RouteConfig } from './Config/Route'
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  combineReduer,
  composeEnhancers(applyMiddleware(thunk))
);
const renderRoute = () => {
  return RouteConfig.map(item =>
    <Route key path={item.path} exact component={item.component} />
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Switch>
        {renderRoute()}
      </Switch>
    </Router>
  </Provider>,

  document.getElementById('root')
);
