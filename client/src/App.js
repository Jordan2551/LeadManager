import React from 'react';
import './App.css';
import Header from './components/layout/header';
import Dashboard from './components/leads/dashboard';
import { Container } from 'react-bootstrap';

function App(props) {
  return (
    <>
      <Header />
      <Container>
        <Dashboard />
      </Container>
    </>
  );
}

export default App;
