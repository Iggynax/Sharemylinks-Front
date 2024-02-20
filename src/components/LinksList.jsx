/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import LinkCard from "./LinkCard";
import { AuthContext } from "../context/AuthContext";

const LinksList = ({ links, onVoteUpdate}) => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {links.length > 0 ? (
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard
                link={link}
                user={user}
                onVoteUpdate={onVoteUpdate}
              />
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
