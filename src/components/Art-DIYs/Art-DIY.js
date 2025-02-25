import './Art-DIY.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

export default function ArtDIY() {
  return (
    <div className="container">
      <Navbar/>
      <div className="mainContent">
        <div className="contentBoxCenter">
            <p>
            ⋆｡°✩ landing page for my fun art projects ⋆｡°✩
            </p>
        </div>
      </div>
      <Sidebar/>
    </div>
  );
}