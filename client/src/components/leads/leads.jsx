import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getLeads, deleteLead } from '../../redux/lead/lead-actions';

class Leads extends React.Component {
  //????
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <>
        <h2>Leads</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead) => {
              return (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button
                      className='btn btn-danger btn-sm'
                      onClick={this.props.deleteLead.bind(this, lead.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leads.leads, // leads REDUCER from that reducer get leads property
});

const mapDispatchToProps = (dispatch) => ({
  getLeads: () => getLeads(dispatch),
  deleteLead: (id) => deleteLead(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Leads);
