import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <p className="footer__title">Связаться со мной</p>
          <div className="footer__contact">
            <a href="" className="footer__link fecebook"></a>
            <a href="" className="footer__link instagram"></a>
            <a href="" className="footer__link telegram"></a>
            <a href="" className="footer__link email"></a>
            <a href="" className="footer__link whatsup"></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
