import { useContext } from "react";
import LinksList from "../components/LinksList";
import useLinks from "../hooks/useLinks";
import { AuthContext } from "../context/AuthContext";
import NewLink from "../components/NewLink";

const LinksPage = () => {
  const { links, loading, error, reloadLinks } = useLinks(); // Ahora incluye reloadLinks
  const { user } = useContext(AuthContext);

  const handleVoteUpdate = () => {
    reloadLinks(); // Llama a esta función después de una votación exitosa para recargar los links
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>

      {user && <NewLink />}
      {""}
      <p>Aquí van los links</p>
      <LinksList links={links} onVoteUpdate={handleVoteUpdate} />
    </section>
  );
};

export default LinksPage;
