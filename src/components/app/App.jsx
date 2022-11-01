import BooksFilter from '../booksFilter/BooksFilter';
import BooksList from '../booksList/BooksList';
import Header from '../header/Header';
import NewBookModal from '../newBookModal/NewBookModal';
import './app.scss'

function App() {
  return (
    <>
      <Header/>
      <BooksFilter/>
      <BooksList/>
      <NewBookModal/>
    </>
  );
}

export default App;
