import React from 'react';
import footerLogo from '../../assets/1.png';
import './footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <img src={footerLogo} className="footerLogo" alt="logo" />
    </div>
  );
}

export default Footer;
