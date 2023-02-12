import sportsee from '../icons/sportsee_logo.svg';
import '../style/components/Logo.css'

const Logo = () => {
  return (
    <div className="logo">
      <div className="icon logo__icon">
        <img className="icon__img" alt="Sportsee icon" src={sportsee} />
      </div>
      <p className="logo__text">SportSee</p>
    </div>
  );
}

export default Logo;