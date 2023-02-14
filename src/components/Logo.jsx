import logo from '../icons/logo.svg';
import '../style/components/Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__img" alt="Sportsee logo" src={logo} />
    </div>
  );
};

export default Logo;
