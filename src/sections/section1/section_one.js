import img from '../../assets/img/brazil.png';
import './styles.css';

import { SiYoutubegaming } from 'react-icons/si';
import { BsTwitch } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { SiFacebookgaming } from 'react-icons/si';
import { FaRedditAlien } from 'react-icons/fa';

function SectionOne() {
  return (
    <>
      <div className="section s1" id="home">
        <h3>Home</h3>
        <div className="bg-wp">
          <img src={img} alt="brazil" />
        </div>

        <div className="text-container">
          <h1>Join the</h1>
          <h2>community</h2>

          <span>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            malesuada dolor tortor, quis malesuada magna pulvinar at
          </span>

          <a href="#community" className="explore-btn">
            explore
          </a>
        </div>

        <div className="socials">
          <SiYoutubegaming className="icon" />
          <BsTwitch className="icon" />
          <FaDiscord className="icon" />
          <SiFacebookgaming className="icon" />
          <FaRedditAlien className="icon" />
        </div>
      </div>
    </>
  );
}

export default SectionOne;
