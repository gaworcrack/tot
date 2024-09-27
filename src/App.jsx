import React from 'react';
import HomePage from './pages/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InformasiCuaca from './pages/informasi-cuaca/InformasiCuaca';
import InformasiGempa from './pages/informasi-gempa/InformasiGempa';

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
            element={<InformasiGempa />}
          />
          <Route
            path="/informasi-cuaca"
            element={<InformasiCuaca />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
