import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

export default [
  {
    // No path ties to app component, so will always be displayed on screen
    ...App,
    routes: [
      {
        // component: HomePage,
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      }
    ]
  }
];
