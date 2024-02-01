/* eslint-disable react/prop-types */
const LinkCard = ({link}) => {
    return <article>

        <p>{link.url} </p>
        <p>{link.title}</p>
        <p> {link.description}  </p>
        <p>{link.votedByMe} </p>
        <p>{link.average_vote} </p>
        <span> By  {link.owner} On {new Date(link.created_at).toLocaleString()} 
         </span>

    </article>
}

export default LinkCard;