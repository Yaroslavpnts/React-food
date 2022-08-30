import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="light-blue darken-1">
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          React Shop
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
