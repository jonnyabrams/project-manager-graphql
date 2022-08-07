import logo from "./assets/logo.png";

const Header = () => {
  return (
    <div className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} className="mr-2" alt="" />
            <div>Project Manager</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
