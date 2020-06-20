import React from 'react';
import './App.css';
import Header from './components/layout/header';
import Dashboard from './components/leads/dashboard';
import { Container } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addLead } from './redux/lead/lead-actions';

function App(props) {
  props.addLead({
    name: 'Jordan',
    email: 'Jordan1158@gmail.com',
    message: 'hello!',
  });

  return (
    <>
      <p>Check it out! {props.message}</p>
      <Header />
      <Container>
        <Dashboard />
      </Container>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addLead: (lead) => dispatch(addLead(lead)),
});

const mapStateToProps = (state) => ({ message: state.lead.message });

export default connect(mapStateToProps, mapDispatchToProps)(App);
