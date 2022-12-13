import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ProductList from './components/ProductList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const persons = {
    name : 'sugam',
    age : 30,
    married : true
  }
  return (
    <div className="App">
      <Counter />
      <ProductList />
      <ToastContainer />
      <br></br>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {persons.name}
        </a>
      </header>
      <h1>{persons.name} is {persons.age} years old and is {persons.married ? 'married' : 'unmarried'}</h1>
    
      
    </div>
  );
}

export default App;