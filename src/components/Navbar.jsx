import '../style/components/Navbar.css';
import Logo from './Logo';

const Navbar = ({ location }) => {
  return (
    <div className={`navbar navbar-${location}`}>
      {location === 'top' ? <Logo /> : <p>Copyright</p>}
      {location === 'top' ? <p>link-list</p> : <p>icon-list</p>}
    </div>
  );
};

export default Navbar;
