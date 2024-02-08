/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import VoteRating from "./VoteRating";
import { AuthContext } from "../context/AuthContext";
import { deleteLinkService } from "../services";

const LinkCard = ({ link, onVoteUpdate  }) => {
    const renderVoteMessage = () => {
        if (link.votedByMe) {
          return <p> ✔️ Ya has votado este link !!</p>;
        } else {
          return <p> Aún no has votado este link.</p>;
        }
      };

  const {user} = useContext(AuthContext)
  const [error,setError] = useState("");

  const deleteLink = async (link_id) => {
    try {
      
      await deleteLinkService( user.token, link_id);
      onVoteUpdate(); 
      
    } catch (error) {
      setError(error.message); 
    }
  };

  

  return (
    <article>
        <fieldset>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
            </a>
      <p>Título:{link.title}</p>
      <p>Descripción: {link.description} </p>
      
      <p>Ranking :{link.average_vote} </p>
      <VoteRating
        link_id={link.id}
        initialValue={link.initialVoteValue}
        onVoteUpdate={onVoteUpdate}
      />
      {renderVoteMessage()}
       <span>
        {" "}
        {new Date(link.created_at).toLocaleString()}
      </span>

      {user && user.id === link.user_id ? (
      <section>
        <button onClick={() => deleteLink(link.id)}> Borrar </button> 
        {error ? <p>{error}</p> : null}
        </section>
        ) : null }
        </fieldset>
      

     
     
    </article>
  );
};

export default LinkCard;
