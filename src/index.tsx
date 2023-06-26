import React, { Suspense } from 'react';
import { render } from 'react-dom';

import App from './App';
import './i18n';

import './index.scss';

render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root'),
);
