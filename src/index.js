import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

import store from './app/store'
import Root from './app/Root';

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <Root />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
