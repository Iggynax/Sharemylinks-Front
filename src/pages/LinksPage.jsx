import React, { useContext } from "react";
import LinksList from "../components/LinksList";
import useLinks from "../hooks/useLinks";
import NewLink from "../components/NewLink";
import { AuthContext } from "../context/AuthContext";

const LinksPage = () => {
  const { links, loading, error, reloadLinks, addLink } = useLinks(); // Ahora incluye reloadLinks
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
      <p>ULTIMAS NOVEDADES</p>
      <LinksList
        links={links}
        onVoteUpdate={handleVoteUpdate}
        addLink={addLink}
      />
    </section>
  );
};

export default LinksPage;
