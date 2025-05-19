import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Internships from './pages/Internships/Internships';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import Logout from './pages/Logout/Logout';
import './styles/global.css';
import Footer from './components/Footer/Footer';

const App = () => {
  const [dark, setDark] = useState(false);
  const toggleDark = () => setDark(!dark);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  

  return (
    <div className={dark ? 'app dark' : 'app'}>

      <Router>
        <Navbar dark={dark} toggleDark={toggleDark} onMenuClick={openSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
          <div className="main-content">
    <Routes>
      ...
          </Routes>
         <Footer />
         </div>
         </Router>
         </div>
  );
};

export default App;
