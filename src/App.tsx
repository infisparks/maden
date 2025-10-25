// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Fix: Added explicit .jsx extensions to imports to resolve compilation errors.
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import AlMadenPage from './components/home/Al-madenPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import FloorMapPage from './pages/FloorMapPage.jsx';
import Admin from './pages/Admin.jsx';
import PrivacyPolicyPage from './pages/Privacy.jsx';

function App() {
  return (
    // FIX: Switched from HashRouter to BrowserRouter for clean, indexable URLs (better for SEO)
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/madenPage" element={<AlMadenPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* Note: In BrowserRouter, the projects/:id path should now be correctly indexed. */}
            <Route path="/projects/:id" element={<ProjectsPage />} /> 
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/floor-plans" element={<FloorMapPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
