import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';
import Home from './pages/Home';
import About from './pages/About';

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
      Placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
    })
  }
];
