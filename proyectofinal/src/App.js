import logo from './logo.svg';
import './App.css';
import  Login from './components/login/login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          <code>src/App.js</code> 


          <h2>cambio por emma cr</h2>


        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
