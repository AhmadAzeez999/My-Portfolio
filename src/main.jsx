import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import WebProjectsPage from '../pages/WebProjectsPage.jsx';
import MobileAppProjectsPage from '../pages/MobileAppProjectsPage.jsx';
import { GameProjects } from '../pages/GameProjects/GameProjects.jsx';
import GDProjects from '../pages/GDProjects/GDProjects.jsx';
import OtherProjects from '../pages/OtherProjects/OtherProjects.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/My-Portfolio/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="websiteProjects" element={<WebProjectsPage />} />
        <Route path="mobileAppProjects" element={<MobileAppProjectsPage />} />
        <Route path="gameProjects" element={<GameProjects />} />
        <Route path="gdProjects" element={<GDProjects />} />
        <Route path="otherProjects" element={<OtherProjects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);