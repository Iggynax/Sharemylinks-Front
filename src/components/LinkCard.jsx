/* eslint-disable react/prop-types */
import React from "react";
import VoteRating from "./VoteRating";

const LinkCard = ({ link, onVoteUpdate }) => {
  const renderVoteMessage = () => {
    if (link.votedByMe) {
      return <p> ✔️ Ya has votado este link !!</p>;
    } else {
      return <p> Aún no has votado este link.</p>;
    }
  };

  return (
    <article>
      <p>LINK: {link.url} </p>
      <p>Título:{link.title}</p>
      <p>Descripción: {link.description} </p>
      {renderVoteMessage()}
      <p>Ranking :{link.average_vote} </p>
      <VoteRating
        link_id={link.id}
        initialValue={link.initialVoteValue}
        onVoteUpdate={onVoteUpdate}
      />

      <span>
        {" "}
        By {link.owner} On {new Date(link.created_at).toLocaleString()}
      </span>
    </article>
  );
};

export default LinkCard;
