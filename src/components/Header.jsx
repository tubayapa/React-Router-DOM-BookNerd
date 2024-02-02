import { Link, NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <header className="navbar bg-primary text-white">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 fs-3">
            <Link className="text-decoration-none text-white" to="/">BookNerd</Link>
          </span>

          <div className="d-flex gap-2">
            <NavLink className="text-decoration-none text-white" to="/">Home</NavLink>
            <NavLink className="text-decoration-none text-white" to="/products">Products</NavLink>
            <NavLink className="text-decoration-none text-white" to="/category">Category</NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
