import React from 'react';
import HomePage from './pages/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GempaUpdate from './pages/informasi-gempa/gempa-update/GempaUpdate';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/informasi-gempa"
            element={<GempaUpdate />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
