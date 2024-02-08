import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <section>
      <h1>PAGINA NO ENCONTRADA</h1>
      <p>Esta consulta solicitada no tiene respuesta.</p>
      <Link to={"/links"}>Vuelta a links</Link>
    </section>
  );
};

export default ErrorPage;
