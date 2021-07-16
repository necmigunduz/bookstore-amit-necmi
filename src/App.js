import './App.css';
import BooksList from './container/BooksList';
import BooksForm from './container/BooksForm';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <table>
        <BooksList />
      </table>
      <BooksForm />
    </div>
  );
}

export default App;
