import cycling from '../icons/cycling.svg';
import fitness from '../icons/fitness.svg';
import swimming from '../icons/swimming.svg';
import yoga from '../icons/yoga.svg';
import '../style/components/NavIcons.css';

const NavIcons = () => {
  return (
    <div className="nav-icons">
      <div className="nav-icons__button">
        <div className="nav-icons__button__icon">
          <img className="nav-icons__button__icon__img" alt="Yoga icon" src={yoga} />
        </div>
      </div>
      <div className="nav-icons__button">
        <div className="nav-icons__button__icon">
          <img className="nav-icons__button__icon__img" alt="Swimming icon" src={swimming} />
        </div>
      </div>
      <div className="nav-icons__button">
        <div className="nav-icons__button__icon">
          <img className="nav-icons__button__icon__img" alt="Cycling icon" src={cycling} />
        </div>
      </div>
      <div className="nav-icons__button">
        <div className="nav-icons__button__icon">
          <img className="nav-icons__button__icon__img" alt="Fitness icon" src={fitness} />
        </div>
      </div>
    </div>
  );
};

export default NavIcons;
