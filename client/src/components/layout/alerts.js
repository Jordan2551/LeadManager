import React, { Component } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteErrors } from '../../redux/error/error-actions';
import { deleteMessage } from '../../redux/message/message-actions';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  displayErrors(errors) {
    // Grab the error keys for the alerts
    const errorNames = Object.keys(errors.message);
    Object.values(errors.message).forEach((value, i) => {
      this.props.alert.error(errorNames[i] + ' ' + value);
    });
    this.props.deleteErrors();
  }

  displayMessages(messages) {
    Object.values(messages).map((message) => {
      this.props.alert.success(message);
    });
    this.props.deleteMessage();
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (message) this.displayMessages(message);
    if (error.message) this.displayErrors(error);
  }

  render() {
    return <></>;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  deleteMessage: () => deleteMessage(dispatch),
  deleteErrors: () => deleteErrors(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAlert()(Alerts));
