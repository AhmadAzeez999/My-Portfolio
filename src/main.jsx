import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import WebProjectsPage from '../pages/WebProjectsPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/My-Portfolio/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="websiteProjects" element={<WebProjectsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);