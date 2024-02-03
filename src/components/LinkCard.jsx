/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const LinkCard = ({ link }) => {
    return (
        <article>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
            </a>
            <p>{link.title}</p>
            <p>{link.description}</p>
            <p>{link.votedByMe}</p>
            <p>{link.average_vote}</p>
            <span>
                By {link.owner} On{" "}
                {new Date(link.created_at).toLocaleString()}
            </span>
        </article>
    );
};

export default LinkCard;
