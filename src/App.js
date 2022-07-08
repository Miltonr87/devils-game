import './style.css';

import SectionOne from './sections/section1/section_one';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

function Webcontent() {
  return (
    <>
      <div className='open-menu'>
        <BiMenuAltRight id="m" className="open" />
        <AiOutlineClose id="m" className="close" />
      </div>

      <div className="menu">
        <ul>
          <a href="#home" className='active'>Home</a>
          <a href="#community">Community</a>
          <a href="#games">Games</a>
          <a href="#streams">Streams</a>
          <a href="#contact">Contact</a> 
        </ul>
      </div>

      <SectionOne />
    </>
  )
}

export default Webcontent;
