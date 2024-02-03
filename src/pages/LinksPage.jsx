import { useContext } from "react";
import LinksList from "../components/LinksList";
import useLinks from "../hooks/useLinks";
import { AuthContext } from "../context/AuthContext";
import NewLink from "../components/NewLink";

const LinksPage = () => {
  const { links, loading, error } = useLinks();
  const { user } = useContext(AuthContext);
  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      {user && <NewLink />} 

      <p>Aquí van los links</p>
      <LinksList links={links} />
    </section>
  );
};

export default LinksPage;
