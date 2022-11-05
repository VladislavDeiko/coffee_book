

import BooksSearch from '../booksSearch/BooksSearch';
import BooksList from '../booksList/BooksList';
import Header from '../header/Header';
import NewBookModal from '../newBookModal/NewBookModal';
import './app.scss'

function App() {
  return (
    <>
      <Header/>
      <BooksSearch />
      <BooksList/>
      <NewBookModal/>
    </>
  );
}

export default App;
