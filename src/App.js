import './App.css';
import BooksList from './container/BooksList';
import BooksForm from './container/BooksForm';

function App() {
  return (
    <div>
      <h2>BookStore</h2>
      <table className="App">
        <tbody>
          <BooksList />
        </tbody>
      </table>
      <BooksForm />
    </div>
  );
}

export default App;
