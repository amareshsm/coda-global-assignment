import React from 'react';
import Img1 from '../assets/Illustration1.png'
import Img2 from '../assets/Illustration2.png'
import Img3 from '../assets/Illustration3.png'
import Img4 from '../assets/Illustration4.png'
import Img5 from '../assets/Illustration5.png'
const Home=() => {
  return (
    <>
      <img className="icon bottom" src={Img1} height="230" width="200"/>
      <img className="icon top" src={Img2} height="190" width="200"/>
      <img className="icon left" src={Img3} height="140" width="140"/>
      <img className="icon right" src={Img4} height="140" width="140"/>
      <img className="icon right small" src={Img5} height="50" width="50"/>
    </>
  );
}

export default Home;
