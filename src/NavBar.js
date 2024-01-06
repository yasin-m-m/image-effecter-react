import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
import Nav from 'rsuite/Nav';

const NavBar = () => {
  return (
    <div className='navbar'>
      <Nav appearance="tabs">
        <Button><Link to="/brightness"> Brightness </Link></Button>
        <Button><Link to="/contrast"> Contrast </Link></Button>
        <Button><Link to="/saturation"> Saturation </Link></Button>
        <Button><Link to="/grayscale"> Grayscale </Link></Button>
        <Button><Link to="/sepia"> Sepia </Link></Button>
        <Button><Link to="/hue"> Hue Rotate </Link></Button>
        <Button><Link to="/blur"> Blur </Link></Button>
        <Button><Link to="/invert"> Invert </Link></Button>
        <Button><Link to="/opacity"> Opacity </Link></Button>
      </Nav>
    </div>
  );
};

export default NavBar;