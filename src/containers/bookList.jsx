import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectBook from '../actions';
class BookList extends React.Component {

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }

  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} onClick={() => this.props.selectBook(book)}>{book.title}</li>
      );
    });
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: SelectBook}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);