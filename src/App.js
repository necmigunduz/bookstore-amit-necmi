import './App.css';
import BooksList from './container/BooksList';
import BooksForm from './container/BooksForm';

function App() {
  return (
    <div className="App">
      <h2>BookStore</h2>
      <BooksForm />
      <br />
      <BooksList />
    </div>
  );
}

export default App;
