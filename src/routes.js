import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';
import Home from './pages/Home';
import About from './pages/About';
import Loader from './components/Loader/Loader';

export default [
  {
    path: '/:locale/',
    exact: true,
    component: Home
  },
  {
    path: '/:locale/about',
    exact: true,
    component: About
  },
  {
    path: '/:locale/terms',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Terms'), // required
      Placeholder: () => <Loader visible={true} /> // this is optional, just returns null by default
    })
  }
];
