
import BooksSearch from '../booksSearch/BooksSearch';
import BooksList from '../booksList/BooksList';
import Header from '../header/Header';
import NewBookModal from '../newBookModal/NewBookModal';
import './app.scss'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster/>
      <Header/>
      <BooksSearch />
      <BooksList/>
      <NewBookModal/>
    </>
  );
}

export default App;
