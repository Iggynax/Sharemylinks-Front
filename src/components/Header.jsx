import Auth from "./Auth";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
       🌐Share My Links
      </h1>
      <h3>Enjoy & Link 🔗</h3>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};

export default Header;
