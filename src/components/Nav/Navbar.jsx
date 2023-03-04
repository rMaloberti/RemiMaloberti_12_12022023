import PropTypes from 'prop-types';
import '../../style/components/Nav/Navbar.css';
import Logo from './Logo';
import NavIcons from './NavIcons';
import NavLinks from './NavLinks';

const Navbar = ({ location }) => {
  return (
    <div className={`navbar navbar-${location}`}>
      {location === 'top' ? (
        <Logo />
      ) : (
        <p className="navbar__copyright">Copiryght, SportSee 2020</p>
      )}
      {location === 'top' ? <NavLinks /> : <NavIcons />}
    </div>
  );
};

Navbar.propTypes = {
  location: PropTypes.string,
};

export default Navbar;
