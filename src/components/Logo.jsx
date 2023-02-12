import sportseeLogo from '../icons/sportsee_logo.svg';
import '../style/components/Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__img" alt="Sportsee logo" src={sportseeLogo} />
    </div>
  );
};

export default Logo;
