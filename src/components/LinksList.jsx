import React from "react";
import LinkCard from "./LinkCard";

const LinksList = ({ links, onVoteUpdate }) => {
  return (
    <div>
      {links.length > 0 ? (
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} onVoteUpdate={onVoteUpdate} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay ningún link compartido.</p>
      )}
    </div>
  );
};

export default LinksList;