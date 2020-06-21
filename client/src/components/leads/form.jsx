import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { addLead } from '../../redux/lead/lead-actions';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <h1>Add Lead Form</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Name</label>
            <input
              type='text'
              className='form-control'
              name='name'
              placeholder='Name'
              onChange={this.onChange.bind(this)}
              value={name}
            />
          </div>
          <div className='form-group'>
            <label for='email'>Email address</label>
            <input
              type='email'
              className='form-control'
              name='email'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              onChange={this.onChange.bind(this)}
              value={email}
            />
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Message</label>
            <textarea
              className='form-control'
              name='message'
              rows='3'
              value={message}
              onChange={this.onChange.bind(this)}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addLead: (lead) => addLead(dispatch, lead),
});

export default connect(null, mapDispatchToProps)(Form);
