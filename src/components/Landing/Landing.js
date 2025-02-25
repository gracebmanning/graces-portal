import './Landing.css';
import { Link } from 'react-router-dom';
import { door, fairy1, moonfairy, unicorn, angelflowers, birdflowers, entre } from '../../assets/gifs/gifsindex';

export default function Landing() {
  return (
    <div className="landing-container">
      <img id="fairy1" src={fairy1} alt="blue fairy holding a wand" />
      <img id="angelflowers" src={angelflowers} alt="angel passing out flowers from a bouquet" />
      <img id="birdflowers" src={birdflowers} alt="blue birds holding up a floral garland" />
      <Link className="entry-link" to="/home">
        <div className="entry-background">
          <img id="door" src={door} alt="wood door opening on view of green hill, blue sky" />
        </div>
      </Link>
      <img id="entre" src={entre} alt="word 'entre' in script letters" />
      <img id="unicorn" src={unicorn} alt="a peach-colored unicorn flies in, lands for a moment, then flies away" />
      <img id="moonfairy" src={moonfairy} alt="fairy sitting on a crescent moon" />
    </div>
  );
}
