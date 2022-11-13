import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className="copyright">
        Copyright ReactFlix. All Rights Reserved || <Link to="/PoliticaPrivacidade">Politica de privacidade</Link>
      </div>
    </div>
  );
}
export default Footer;
