import './Art-DIY.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { pufferSnoopy, tsunoBag, crochetScarf1 } from '../../assets/images';

const fiberArts = [
  {
      image: pufferSnoopy,
      alt: '',
      title: 'puffer snoopy [pattern from destinymakes.com]',
      date: 'December 2024',
      materials: 'acrylic yarn'
  },
  {
      image: tsunoBag,
      alt: '',
      title: 'tsuno bag',
      date: 'March 2024',
      materials: 'cotton canvas fabric, polyester thread'
  },
  {
      image: crochetScarf1,
      alt: '',
      title: 'skinny scarf',
      date: 'January 2024',
      materials: 'acrylic yarn'
  },
]

function FiberArtsTile(project, index){
  return(
      <div className='projectTile fiberArtsTile' key={index}>
          <img src={project.image} alt={project.alt} />
          <h4>{project.title}</h4>
          <p>{project.date}</p>
          <p>materials: {project.materials}</p>
      </div>
  )
}

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
        <div className='contentBoxCenter'>
          <h3>fiber arts</h3>
          <p>
              I am actively learning how to sew, as well as improving my crochet and embroidery skills. I'll keep my projects here to track progress! ⋆ ˚｡⋆୨୧˚⋆ ˚｡⋆
          </p>
          <div style={{display: 'flex', flexDirection: 'row'}}>
              <div className='projectsList'>
                  {fiberArts.map((proj, index) => {return FiberArtsTile(proj, index)})}
              </div>
          </div>
        </div>

      </div>
      <Sidebar/>
    </div>
  );
}

