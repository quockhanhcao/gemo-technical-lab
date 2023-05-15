import logo from "./logo.png";
import shopName from "./shop-name.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <a href="/">
          <img src={shopName} className="" alt="name" />
        </a>
        <a href="/">
          <img src={logo} className="" alt="logo" />
        </a>
      </h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
      </div>
    </nav>
  );
};

export default Navbar;
