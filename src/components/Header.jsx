import Auth from "./Auth";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to={"/"}>🌐Share My Links</Link>
      </h1>
      <h3>Enjoy & Link 🔗</h3>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};

export default Header;
