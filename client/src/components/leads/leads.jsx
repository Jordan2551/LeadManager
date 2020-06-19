import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getMessage } from '../../redux/lead/lead-actions';

class Leads extends React.Component {
  componentDidMount() {
    this.props.getMessage();
  }

  render() {
    return <div>This is: {this.props.message}</div>;
  }
}

const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  getMessage: () => dispatch(getMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Leads);
