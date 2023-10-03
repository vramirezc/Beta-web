import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerSpacer">
        <div>
          <img src={logo} alt="Beta-logo" />
        </div>
        <div className="gapFooter gapFooter">
          <p>We Speak Digital</p>
          <p>Software · Ui / Ux · AR · AI</p>
        </div>
      </div>
      <div className="gapFooter">
        <p className="transparent">Estudio</p>
        <ul className="none gapFooter">
          <li>Portfolio</li>
          <li>About</li>
          <li>Careers</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="gapFooter">
        <p className="transparent">Idioma</p>
        <ul className="none gapFooter">
          <li>English</li>
          <li>Castellano</li>
          <li>Català</li>
          <li>汉语</li>
        </ul>
      </div>
      <div className="gapFooter">
        <p className="transparent">Social </p>
        <ul className="none gapFooter">
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>TikTok</li>
        </ul>
      </div>
      <div className="gapFooter">
        <p className="transparent">Careers </p>
        <ul className="none gapFooter">
          <li>Development</li>
          <li>Human Interface</li>
          <li>IA + ML</li>
          <li>Internships</li>
        </ul>
      </div>
      <div className="footerSpacer">
        <div className="gapFooter">
          <p className="transparent">Escríbenos</p>
          <p>hola@beta.barcelona</p>
        </div>
        <div className="gapFooter">
          <p className="transparent">Llámanos</p>
          <p className="relative">
            <span className="simboloTelefono">+</span>34 634 560 637
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
