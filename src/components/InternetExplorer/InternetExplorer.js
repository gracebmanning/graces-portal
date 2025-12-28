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
              <div className="planetBoxInternal">
                <h3 className="exploreItemTitle">explore the Internet Archive</h3>
                <p>
                  The <a href='https://archive.org/' target='_blank' rel='noreferrer'>Internet Archive</a> is a digital library preserving the history of the World Wide Web. 
                  As someone who loves internet history and culture, I really appreciate the Internet Archive - including the <a href='https://web.archive.org/' target='_blank' rel='noreferrer'>Wayback Machine</a>, which allows you to explore all the websites the Internet Archive has saved since it began in 1996. 
                  Check it out!
                </p>
              </div>
            </div>
            <div className="planetBox">
              <img className="planetGIF" src={mercury} alt={"rotating Mercury planet"} />
              <div className="planetBoxInternal">
                <h3 className="exploreItemTitle">if you're obsessed with old Microsoft Windows lore...</h3>
                <p>
                and would like to revert your OS to Windows 98, 2000, XP, Vista, or one of the other nostalgia-inducing versions, and need extremely niche tech support regarding said OS: you may enjoy the <a href='https://winclassic.net/' target='_blank' rel='noreferrer'>WinClassic</a> forum!
                </p>
              </div>
            </div>
            <div className="planetBox">
              <img className="planetGIF" src={venus} alt={"rotating Venus planet"} />
              coming soon...
            </div>
            <div className="planetBox">
              <img className="planetGIF" src={earth} alt={"rotating Earth planet"} />
              coming soon...
            </div>
            <div className="planetBox">
              <img className="planetGIF" src={mars} alt={"rotating Mars planet"} />
              coming soon...
            </div>
        </div>
      </div>
      <Sidebar/>
    </div>
  );
}