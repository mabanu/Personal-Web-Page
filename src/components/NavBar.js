import logo from '../photos/low-resolution-color-logo.png';
import './NavBar.css';

function NavBar() {
  return (
    <header className="ds-header nav" id="site-header">
      <div className="container">
        <div className="ds-header-inner">
          <img src={logo} className="ds-logo" alt="logo" />
          <ul className="ds-social">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li><a href="https://github.com/mabanu" target="_blank" rel="noreferrer"><i className="ri-github-fill" /></a></li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li><a href="https://www.linkedin.com/in/maximiliano-barrientos-nunez-964b03a7/" target="_blank" rel="noreferrer"><i className="ri-linkedin-fill" /></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
