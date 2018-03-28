import React from 'react';
import { asyncComponent } from '@jaredpalmer/after';
import Home from './pages/Home';
import About from './pages/About';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    exact: true,
    component: About
  },
  {
    path: '/terms',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Terms'), // required
      Placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
    })
  }
];
