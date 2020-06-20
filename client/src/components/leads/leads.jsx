import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import { getMessage } from '../../redux/lead/lead-actions';

class Leads extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        This is: {this.props.message}
        API call results:
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  getMessage: () => dispatch(getMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Leads);
