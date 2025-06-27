import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Monitoreo from './Paginas/Monitoreo'; // Asegúrate que el archivo exista

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/monitoreo" element={<Monitoreo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);