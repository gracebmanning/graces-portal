import './Favorites.css';
import { IsThisIt, RoomOnFire, FirstImpressionsOfEarth, FuturePresentPast, FetchTheBoltCutters, MmFood, Second, JankyStar,
    PerpetualMotionPeople, TransangelicExodus, LCDSoundsystem, SoundOfSilver, SilentAlarm, Revolver, MNWNW, HiHowAreYou, Sucker,
    Brat, LL, Basspunk, Basspunk2, Forever, LadyBird, Parasite, BeauIsAfraid, TheShining, TheTrumanShow, Trainspotting, BlackSwan,
    TheHoldovers, ISawTheTVGlow, Coraline, AliceInWonderland  } from '../../assets/images';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

export default function Favorites() {
  return (
    <div className="container">
        <Navbar/>
        <div className="mainContent">
        <div className="contentBoxLeft">
            <h3 className="nomargins">Favorite Albums</h3>
            <br/>
            <div className="favoritesContainer">
                <div className="albumTile">
                    <img className="albumCover" src={IsThisIt}
                        alt="an abstract art piece. Yellow background, with blue lines, swirls, and spots that cross and overlap one another."/>
                    <p><b>Is This It</b></p>
                    <p>The Strokes</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={RoomOnFire}
                        alt="an abstract painting of a gambling table, over which two hands hold overlapping guns pointed towards each other."/>
                    <p><b>Room on Fire</b></p>
                    <p>The Strokes</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={FirstImpressionsOfEarth}
                        alt="a black background with gray and white lines coming from the top and bottom center. A red line goes through the center of the groups of lines."/>
                    <p><b>First Impressions of Earth</b></p>
                    <p>The Strokes</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={FuturePresentPast}
                        alt="a tan background with 5 tube-shaped lines in red, orange, yellow, green, and blue."/>
                    <p><b>Future Present Past</b></p>
                    <p>The Strokes</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={FetchTheBoltCutters} alt="vibrant collage with central illustration of determined woman surrounded by chaotic cutout images and handwritten text" />
                    <p><b>Fetch the Bolt Cutters</b></p>
                    <p>Fiona Apple</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={MmFood} alt="colorful comic book-inspired album cover for 'MM..FOOD' featuring a stylized cartoon of MF DOOM in a kitchen" />
                    <p><b>MM..FOOD</b></p>
                    <p>MF DOOM</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={Second} alt="blend of pastel colors and distorted imagery showing Grace Ives getting ready in front of a mirror" />
                    <p><b>2nd</b></p>
                    <p>Grace Ives</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={JankyStar} alt="Grace Ives wearing a headpiece of stars on wires while crouched on the ground." />
                    <p><b>Janky Star</b></p>
                    <p>Grace Ives</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={PerpetualMotionPeople} alt="Ezra Furman standing in front of a white wall painted with abstract blue and red line art." />
                    <p><b>Perpetual Motion People</b></p>
                    <p>Ezra Furman</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={TransangelicExodus} alt="in a car looking forward with the steering wheel and rearview mirror in perspective. Ezra Furman's eyes are reflected in the mirror." />
                    <p><b>Transangelic Exodus</b></p>
                    <p>Ezra Furman</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={LCDSoundsystem} alt="black and white disco ball" />
                    <p><b>LCD Soundsystem</b></p>
                    <p>LCD Soundsystem</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={SoundOfSilver} alt="robotic object sitting on wooden floor, entire perspective rotated 90 degrees to the left." />
                    <p><b>Sound of Silver</b></p>
                    <p>LCD Soundsystem</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={SilentAlarm} alt="black and white landscape of snowy field with sparse trees" />
                    <p><b>Silent Alarm</b></p>
                    <p>Bloc Party</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={Revolver} alt="black and white psychedelic collage of The Beatles members" />
                    <p><b>Revolver</b></p>
                    <p>The Beatles</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={MNWNW} alt="silhouette of man and woman standing at night in front of a lit building with a neon sign reading The Cribs" />
                    <p><b>Men's Needs, Women's Needs, Whatever</b></p>
                    <p>The Cribs</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={HiHowAreYou} alt="A simple black-and-white line drawing of a frog-like creature with long, stalk-like eyes, accompanied by the handwritten text 'Hi, How Are You: The Unfinished Album' and 'Sept 83 Daniel Johnston'" />
                    <p><b>Hi, How Are You</b></p>
                    <p>Daniel Johnston</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={Sucker} alt="Charli xcx wearing red lipstick and a leopard-print top against a bright pink background, holding a large heart-shaped red lollipop with the word 'SUCKER' written on it in white" />
                    <p><b>Sucker</b></p>
                    <p>Charli xcx</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={Brat} alt="A blurry, lowercase black sans-serif font spelling out the word 'brat' centered on a solid, neon lime green background" />
                    <p><b>Brat</b></p>
                    <p>Charli xcx</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={LL} alt="A black pause symbol, consisting of two vertical bars inside a thin circle, is centered on a light, slightly textured background with a few dark smudges in the upper-right corner" />
                    <p><b>LL</b></p>
                    <p>The Hellp</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={Basspunk} alt="A woman wearing a white polo shirt and a grey patterned cardigan makes two distinct hand gestures ('b' and 'p') in front of her chest while standing in a grassy outdoor area" />
                    <p><b>Basspunk</b></p>
                    <p>Bassvictim</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={Basspunk2} alt="A man wearing a white hooded sweatshirt with a mountain logo makes two hand gestures ('b' and '2'/peace sign) while standing in a grassy outdoor area" />
                    <p><b>Basspunk 2</b></p>
                    <p>Bassvictim</p>
                </div>
                <div className="albumTile">
                    <img className="albumCover" src={Forever} alt="A grey knit fabric features a repeating pattern with rows of red geometric shapes resembling leaves, rows of blue infinity symbols, and subtle white snowflake motifs" />
                    <p><b>Forever</b></p>
                    <p>Bassvictim</p>
                </div>
            </div>
        </div>
        <div className="contentBoxLeft">
            <h3 className="nomargins">Favorite Movies</h3>
            <br/>
            <div className="favoritesContainer">
                <div className="movieTile">
                    <img className="moviePoster" src={BeauIsAfraid} alt="layered portraits of the main character, Beau, at four different ages, wearing the same gray pajama shirt." />
                    <p><b>Beau Is Afraid</b></p>
                    <p>2023</p>
                </div>
                <div className="movieTile">
                    <img className="moviePoster" src={Parasite} alt="family members standing or sitting in the backyard in front of their home. Their eyes are crossed out with vertical black lines. A pair of legs laying on the ground sticks out from the left side." />
                    <p><b>Parasite</b></p>
                    <p>2019</p>
                </div>
                <div className="movieTile">
                    <img className="moviePoster" src={LadyBird} alt="side profile portrait of main character standing in a chapel." />
                    <p><b>Lady Bird</b></p>
                    <p>2017</p>
                </div>
                <div className="movieTile">
                    <img className="moviePoster" src={TheShining} alt="yellow background with 'The Shining' in black block letters, with a haunting face transposed in the letter T." />
                    <p><b>The Shining</b></p>
                    <p>1980</p>
                </div>
                <div className="movieTile">
                    <img className="moviePoster" src={TheTrumanShow} alt="main character is sleeping, and this is being broadcast on a screen against a large building" />
                    <p><b>The Truman Show</b></p>
                    <p>1998</p>
                </div>
                <div className="movieTile">
                    <img className="moviePoster" src={Trainspotting} alt="collage of the main characters posing and pointing/making faces at the camera. An orange banner below features 'Trainspotting' in white text." />
                    <p><b>Trainspotting</b></p>
                    <p>1996</p>
                </div>
                <div className="movieTile">
                    <img className="moviePoster" src={BlackSwan} alt="portrait of main character against a white background. She wears white face paint, dark red lipstick, black eyeliner mimicking large bird wings, and a silver crown. Her eyes are an unnatural red." />
                    <p><b>Black Swan</b></p>
                    <p>2010</p>
                </div>
                <div className="movieTile">
                    <img className="moviePoster" src={TheHoldovers} alt="Movie poster for 'The Holdovers', featuring a grumpy teacher, a troubled student, and the school cook standing inside a broken oversized Christmas bulb." />
                    <p><b>The Holdovers</b></p>
                    <p>2023</p>
                </div>
                <div className="movieTile">
                    <img className="moviePoster" src={ISawTheTVGlow} alt="the main character, Owen, sits on the couch facing a TV glowing brightly, emitting a pink light. The rest of the room is totally dark and black." />
                    <p><b>I Saw The TV Glow</b></p>
                    <p>2024</p>
                </div>
                <div className="movieTile">
                    <img className="moviePoster" src={Coraline} alt="A movie poster for 'Coraline' features a young girl and a black cat peering into a glowing doorway from a dark room where the words 'Be careful what you wish for' are written on the wall" />
                    <p><b>Coraline</b></p>
                    <p>2009</p>
                </div>
                <div className="movieTile">
                    <img className="moviePoster" src={AliceInWonderland} alt="A vibrant movie poster for 'Walt Disney's Alice in Wonderland' features Alice sitting at a chaotic tea party with the Mad Hatter, March Hare, and various colorful characters from the film, with large red and pink title text below" />
                    <p><b>Alice in Wonderland</b></p>
                    <p>1951</p>
                </div>
            </div>
        </div>
    </div>
    <Sidebar/>
  </div>
  );
}