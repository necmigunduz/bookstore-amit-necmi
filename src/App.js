import './App.css';
import BooksList from './container/BooksList';
import BooksForm from './container/BooksForm';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <h2>BookStore</h2>
      <BooksForm />
      <br />
      <table>
        <BooksList />
      </table>
    </div>
  );
}

export default App;
