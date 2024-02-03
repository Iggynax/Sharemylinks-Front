import LinkCard from "./LinkCard";

// eslint-disable-next-line react/prop-types
const LinksList = ({ links }) => {


  return (
    <div>
      {links.length > 0 ? (
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
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