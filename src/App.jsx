import React from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';


const App = () => {

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  )
}

export default App;
