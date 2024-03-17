import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import WebProjectsPage from '../pages/WebProjectsPage.jsx';
import MobileAppProjectsPage from '../pages/MobileAppProjectsPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/My-Portfolio/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="websiteProjects" element={<WebProjectsPage />} />
        <Route path="mobileAppProjects" element={<MobileAppProjectsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);