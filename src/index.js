import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './lib/configureStore';
import style from './styles/normalize.scss';

import getRoutes from './routes';

let store = configureStore();
 
//let element = React.createElement(App, {});
//render(element, document.querySelector('.root'));

render(
  <Provider store={store}>
    {getRoutes()}
  </Provider>,
  document.getElementById('root')
);