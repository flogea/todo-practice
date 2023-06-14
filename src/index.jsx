import React, { Suspense } from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';
import './i18n.js';

import './index.scss';

render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root'),
);
