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
    <article className="link-card">
        <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
            </a>
      <h5>Título:{link.title}</h5>
      <h5>Descripción: {link.description} </h5>
  
      
      <h5>Ranking :{link.average_vote} </h5>
      <VoteRating
        link_id={link.id}
        initialValue={link.initialVoteValue}
        onVoteUpdate={onVoteUpdate}
      />
      {renderVoteMessage()}
       <h4>
        {" "}
        {new Date(link.created_at).toLocaleString()}
      </h4>

      {user && user.id === link.user_id ? (
      <section>
        <button onClick={() => deleteLink(link.id)}> 
        <span className="material-symbols-outlined">delete</span>
        </button> 
        {error ? <p>{error}</p> : null}
        </section>
        ) : null }
       
    </article>
  );
};

export default LinkCard;
