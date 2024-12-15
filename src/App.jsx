import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Products from './components/Products';
import Signup from './components/Signup';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Header authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/products"
          element={
            authenticated ? <Products /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App