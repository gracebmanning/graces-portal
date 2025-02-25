import './InternetExplorer.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { sun, mercury, venus, earth, mars } from '../../assets/gifs/gifsindex';

export default function Videos() {
  return (
    <div className="container">
      <Navbar/>
      <div className="mainContent">
        <div id="galaxyBox">
            <div className="planetBox">
              <img className="planetGIF" src={sun} alt={"yellow sun with pulsing rays"} />
              test text
            </div>
            <div className="planetBox">
              <img className="planetGIF" src={mercury} alt={"rotating Mercury planet"} />
              test text
            </div>
            <div className="planetBox">
              <img className="planetGIF" src={venus} alt={"rotating Venus planet"} />
              test text
            </div>
            <div className="planetBox">
              <img className="planetGIF" src={earth} alt={"rotating Earth planet"} />
              test text
            </div>
            <div className="planetBox">
              <img className="planetGIF" src={mars} alt={"rotating Mars planet"} />
              test text
            </div>
        </div>
      </div>
      <Sidebar/>
    </div>
  );
}