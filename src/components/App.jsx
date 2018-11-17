import React from 'react';
import BookList from '../containers/bookList';
import BookDetail from '../containers/bookDetail';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <BookList />
        <BookDetail />
      </ React.Fragment>
    );
  }
}

export default App;