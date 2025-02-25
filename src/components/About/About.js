import './About.css';
import { thumbsUp, catOnPiano } from '../../assets/gifs/gifsindex';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

export default function About() {
  return (
    <div className="container">
      <Navbar/>
      <div className="mainContent">
        <div className="contentBoxCenter">
            <p>
                hello! I'm Grace.
                <br/>
                pronouns: she/her
                <br/>
                hometown: san diego, ca
            </p>
            <br/>
            <p>
                <b>Am I currently looking for a job?</b>
                <br/>
                <b>Yes!</b>
                <br/>
                <img id="thumbsUpGif" src={thumbsUp} alt="a yellow smiley face emoji wearing sunglasses, next to a thumbs up icon bouncing up and down." />
                <br/>
                I create generative artwork for live events, music videos, and more (using TouchDesigner)!<br/>See my portfolio at <a href="https://graceis.online/" target="_blank" rel="noreferrer">graceis.online</a>.
                <br/><br/>
                I also have lots of experience in web design & development, so if you like my work, feel free to reach out using the "email" button in the sidebar. Thanks!
            </p>
        </div>
        <div className="twoColumnBox">
            <div className="contentBoxLeft">
              likes:
              <ul>
                  <li>cows</li>
                  <li>photography</li>
                  <li>snorkeling</li>
                  <li>hiking</li>
                  <li>CSS tricks</li>
                  <li>square-toe platform heels</li>
                  <li>purchasing jackets at thrift stores</li>
                  <li>ambient lighting</li>
                  <li>exclamation points!</li>
                  <li>ocean facts</li>
                  <li>funny socks</li>
                  <li>public transportation</li>
              </ul>
              <br/>
              <img id="catonpiano-gif" src={catOnPiano} alt="orange cat walking on piano keys" />
            </div>
            <div className="contentBoxLeft">
              dislikes:
              <ul>
                  <li>the absence of headphone jacks in modern smartphones</li>
              </ul>
            </div>
        </div>
      </div>
      <Sidebar/>
    </div>
  );
}