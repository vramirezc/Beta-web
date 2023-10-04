function Contactanos() {
  return (
    <div className="contentSmall background">
      <div className="contactanos">
        <p className="contentTitle">Contáctanos</p>
        <br />
        <br />
        <ul className="contactanosList none">
          <li>
            <p>Escríbenos</p>
            <p className="transparent">hola@beta.barcelona</p>
          </li>
          <li>
            <p>Llámanos</p>
            <p className="transparent relative">
              <span className="simboloTelefono transparent">+</span>34 634 560
              637
            </p>
          </li>
          <li>
            <p>Slack</p>
            <p className="transparent">@slack/betasoftware</p>
          </li>
          <li>
            <p>Más madera</p>
            <p className="transparent">Whatsapp - Telegram</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contactanos;
