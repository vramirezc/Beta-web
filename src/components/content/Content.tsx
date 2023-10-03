import Partners from "./components/Partners";
import Clientes from "./components/grid/Clientes";
import Contactanos from "./components/grid/Contactanos";
import Filosofia from "./components/grid/Filosofia";
import Manifesto from "./components/grid/Manifesto";
import Premios from "./components/grid/Premios";
import Servicios from "./components/grid/Servicios";
import Siguenos from "./components/grid/Siguenos";

function Content() {
  return (
    <>
      <div className="wrapper">
        <Manifesto />
        <Filosofia />
        <Contactanos />
        <Clientes />
        <Servicios />
        <Premios />
        <Siguenos />
      </div>
      <Partners />
    </>
  );
}

export default Content;
