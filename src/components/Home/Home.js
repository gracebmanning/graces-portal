import './Home.css';
import { orangeCow, frogResult } from '../../assets/images';
import { pinkPanther } from '../../assets/gifs/gifsindex';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { wrapIndividualLettersNumbered } from '../utilityFunctions';

export default function Home() {
  return (
    <div className="container">
      <Navbar/>
      <div className="mainContent">
        <div className="contentBoxCenter">
            <p id="hiImGrace">
              {wrapIndividualLettersNumbered("Hi, I'm Grace!", "mainHeaderLetter")}
            </p>
            <img id="cow" src={orangeCow} alt="orange cow"/>
            <p>(I'm not a cow...I'm a person.)</p>
        </div>
        <div className="contentBoxLeft">
          <h3><b>welcome to my *~*~portal~*~* on the internet.</b></h3>
          Stay awhile! Have fun!
          <br/>
          <img id="pinkPanther" src={pinkPanther}
            alt="the Pink Panther moving his hands to his chin and then pointing up with his left hand." />
          <br/>
          <h4>Looking For Answers?</h4>
          <p>
            Check out my <a href="fortune-teller">Fortune Teller</a> that I created in the midst of a 5-hour caffeine-fueled coding session, during which I didn't blink a single time! If that doesn't make me qualified to read into the future, I don't know what does.
          </p>
        </div>
        <div className="contentBoxCenter">
            What kind of frog am I?<br/><br/>
            <a href="http://www.allaboutfrogs.org/funstuff/frogtest.php3" target="_blank" rel="noreferrer">
                <img src={frogResult} width="215" height="100" alt="I'm a Pac Man Frog!" border="0" />
            </a>
            <br/>Argentinian Horned frogs seem to have been designed for the sole purpose of eating as
            much as possible. They appear to consist of two main parts: a mouth and a stomach. This is
            probably where they got the nickname "PacMan". Their needs are fairly simple, a warm habitat
            in a simple plastic box or aquarium with some shallow water and a few rocks so that they can
            laze around all day suits them just fine. They don't mix well with other frogs, even in
            their own species, as they are just as likely to eat them. <a href="http://www.allaboutfrogs.org/funstuff/frogtest.php3" target="_blank" rel="noreferrer">What kind of Frog are <i>you</i>?</a>
        </div>
      </div>
      <Sidebar/>
    </div>
  );
}