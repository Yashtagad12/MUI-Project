import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { Route, Routes } from 'react-router';
import MainLayout from './Layouts/MainLayout';
import Inbox from './Pages/Inbox';
import Sent from './Pages/Sent';
import Starred from './Pages/Starred';
import Trash from './Pages/Trash';
import EmailDetails from './Pages/EmailDetails';
import Compose from './Pages/Compose';



const App = () => {

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <MainLayout open={sidebarOpen} onMenuClick={() => setSidebarOpen(true)} onSidebarClose={() => setSidebarOpen(false)} >
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/sent" element={<Sent />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/compose" element={<Compose />} />
          <Route path="/email/:id" element={<EmailDetails />} />

        </Routes>
      </MainLayout>
    </>
  )
}

export default App;
