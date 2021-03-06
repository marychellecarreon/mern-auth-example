import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

Admin.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect()(Admin);
