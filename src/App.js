import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Videos from './components/Videos/Videos';
import Favorites from './components/Favorites/Favorites';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div id="container">
        <div id="navbarSection">
            <Navbar />
        </div>
        <div id="mainSection">
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/videos' element={<Videos/>} />
                <Route path='/favorites' element={<Favorites/>} />
            </Routes>
            <div id="sidebarSection">
              <Sidebar />
            </div>
        </div>
    </div>
  );
}