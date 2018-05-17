import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.ico';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 66 }} style={{ height: 120, width: 120 }} >
        <div className="Tilt-inner">
          <img style={{paddingTop: 10, width: 100, height: 100  }} alt='logo' src={brain} />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
