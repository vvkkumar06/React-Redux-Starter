import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.activeBook.title}</h3>
        <h3>{this.props.activeBook.description}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeBook: state.activeBook || ''
  }
}

export default connect(mapStateToProps)(BookDetail);
