import "./Headeer.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="cash">
            <h1>BALANCE:</h1>
            <button className="money">20000$</button>
          </div>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </div>
        </div>
      </div>
      <hr className="line" style={{ height: "1px", background: "#000000" }} />
    </div>
  );
};

export default Header;
