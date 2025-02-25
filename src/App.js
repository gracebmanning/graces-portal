import './App.css';
import Landing from './components/Landing/Landing';
import PageDoesNotExist from './components/404/404';
import Home from './components/Home/Home';
import About from './components/About/About';
import ArtDIY from './components/Art-DIYs/Art-DIY';
import Photography from './components/Photography/Photography';
import Videos from './components/Videos/Videos';
import Favorites from './components/Favorites/Favorites';
import Music from './components/Music/Music';
import FortuneTeller from './components/FortuneTeller/FortuneTeller';
import InternetExplorer from './components/InternetExplorer/InternetExplorer';
import Emma22Bday from './components/zEmma22Bday/emma22bday';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='art-diy' element={<ArtDIY/>} />
        <Route path='photography' element={<Photography/>} />
        <Route path='videos' element={<Videos/>} />
        <Route path='favorites' element={<Favorites/>} />
        <Route path='music' element={<Music/>} />
        <Route path='fortune-teller' element={<FortuneTeller/>} />
        <Route path='internet-explorer' element={<InternetExplorer/>} />
        <Route path='happy22birthdayEmma' element={<Emma22Bday/>} />
        <Route path='*' element={<PageDoesNotExist/>} />
    </Routes>
  );
}