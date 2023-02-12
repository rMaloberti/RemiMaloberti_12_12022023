import '../style/components/Navbar.css';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Navbar = ({ location }) => {
  return (
    <div className={`navbar navbar-${location}`}>
      {location === 'top' ? (
        <Logo />
      ) : (
        <p className="navbar__copyright">Copiryght, SportSee 2020</p>
      )}
      {location === 'top' ? <NavLinks /> : <p>icon-list</p>}
    </div>
  );
};

export default Navbar;
