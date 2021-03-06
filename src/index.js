import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';
import Theme from './theme';

import './i18n';
import './style.css';

ReactDOM.render(
  <Theme>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </Theme>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
