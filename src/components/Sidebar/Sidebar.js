import './Sidebar.css';
import { littleGuys } from '../../assets/88x31/88x31index.js';
import { Link } from 'react-router-dom';

const icons = littleGuys.map((icon) => 
<a href={icon.source} target="_blank" rel="noreferrer" key={icon.alt}>
  <img className="littleGuys" src={icon.asset} alt={icon.alt} />
</a>
);

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="sidebarHeader">links</h3>
      <a href="https://github.com/gracebmanning" target="_blank" rel="noreferrer">github</a>
      <br/>
      <a href="https://grace-manning.com/" target="_blank" rel="noreferrer">professional me</a>

      <br/><br/>
      <h3 className="sidebarHeader">contact</h3>
      <Link to="/contact">contact form</Link>
      <br/>

      <br/>
      <h3 className="sidebarHeader">established</h3>
      <p>May 8, 2023</p>

      <br/>
      <h3 className="sidebarHeader">last updated</h3>
      <p>December 27, 2025</p>

      <p className="navSeparator">-------------------------------</p>
      <div className="collection">
        {icons}
      </div>

      <p className="navSeparator">-------------------------------</p>
      <p>This background image is a <a href="https://schumacher.com/catalog/products/177381" target="_blank" rel="noreferrer">fabric</a>!</p>
  </div>
  );
}