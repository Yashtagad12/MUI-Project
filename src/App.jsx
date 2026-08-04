import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { Route, Routes } from 'react-router';
import MainLayout from './Layouts/MainLayout';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <MainLayout open={sidebarOpen} onMenuClick={() => setSidebarOpen(true)} onSidebarClose={() => setSidebarOpen(false)} >
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/blog" element={<div>Blog</div>} />
          <Route path="/portfolio" element={<div>Portfolio</div>} />
          <Route path="/faq" element={<div>FAQ</div>} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App;
