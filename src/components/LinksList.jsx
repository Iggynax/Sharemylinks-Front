import LinkCard from "./LinkCard";

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