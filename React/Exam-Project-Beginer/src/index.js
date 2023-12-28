import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, Footer } from './layout/layout';
import Home from './pages/Home';
import Events from './pages/Events';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/events" exact element={<Events />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);