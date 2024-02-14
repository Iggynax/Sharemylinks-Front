import Auth from "./Auth";
import { Link } from "react-router-dom";
import { playClickInit } from "../services";

const Header = () => {
  return (
    <header>
      <section className="nav">
        <h1>
          <Link to={"/"} onClick={playClickInit}>
            {" "}
            <h1>🌐 Share My Links 🌐 </h1>
            <hr />
          </Link>
        </h1>
        <h3 className="span loader">
          <span className="m">*</span>
          <span className="m">E</span>
          <span className="m">N</span>
          <span className="m">J</span>
          <span className="m">O</span>
          <span className="m">Y</span>
          <span className="m"> </span>
          <span className="m">A</span>
          <span className="m">N</span>
          <span className="m">D</span>
          <span className="m"> </span>
          <span className="m">L</span>
          <span className="m">I</span>
          <span className="m">N</span>
          <span className="m">K</span>
          <span className="m"> </span>
          <span className="m">🔗</span>
          <span className="m"> *</span>
        </h3>
        <nav>
          <Auth />
        </nav>
      </section>
    </header>
  );
};

export default Header;
