import '../style/components/Navbar.css';
import Logo from './Logo';

const Navbar = ({ location }) => {
  return (
    <div className={`navbar-${location}`}>
      {location === 'top' ? <Logo /> : 'copyright'}
      {location === 'top' ? 'link-list' : 'icon-list'}
    </div>
  );
};

export default Navbar;
