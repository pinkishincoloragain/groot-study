import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DrawingPage from 'pages/DrawingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrawingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
