import '../style/components/Navbar.css';
import Logo from './Logo';

const Navbar = ({ location }) => {
  return (
    <div className={`navbar navbar-${location}`}>
      {location === 'top' ? <Logo /> : <p className="navbar__copyright">Copiryght, SportSee 2020</p>}
      {location === 'top' ? <p>link-list</p> : <p>icon-list</p>}
    </div>
  );
};

export default Navbar;
