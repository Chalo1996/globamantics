import React from 'react';
import logo from './globoLogo.jpg';

const Header = ({subtitle}) => {
  return (
    <div className="row">
      <div className="col-md-5">
        <img src={ logo } className="logo" alt="Logo" />
      </div>
      <div className="col-md-7 mt-5 subtitle">
        {subtitle}
      </div>
    </div>
  );
};

export default Header;
