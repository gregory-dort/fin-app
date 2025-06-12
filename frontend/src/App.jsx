// src/App.jsx

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        {/* Navbar Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Start Page</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
