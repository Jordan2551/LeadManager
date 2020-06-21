import React from 'react';
import './App.css';
import Header from './components/layout/header';
import Dashboard from './components/leads/dashboard';
import Alerts from './components/layout/alerts';
import { Container } from 'react-bootstrap';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

function App(props) {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Header />
        <Alerts />
        <Container>
          <Dashboard />
        </Container>
      </AlertProvider>
    </Provider>
  );
}

export default App;
