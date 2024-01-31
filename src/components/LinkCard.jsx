/* eslint-disable react/prop-types */
const LinkCard = ({link}) => {
    return <article>
        <p>{link.URL} {link.tittle} {link.description}  </p>
        <p> On {new Date(link.created_at).toLocaleString()} 
        </p>
    </article>
}

export default LinkCard;