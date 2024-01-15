import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <section>
      <h1>PAGINA NO ENCONTRADA</h1>
      <p>Esta consulta solicitada no tiene respuesta.</p>
      <Link to={"/"}>Vuelta a HOME</Link>
    </section>
  );
};

export default ErrorPage;
