import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul>
      <li>
          <Link className="btn btn-danger" to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
