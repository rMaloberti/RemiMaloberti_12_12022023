import calories from '../icons/calories.svg';
import carbohydrates from '../icons/carbohydrates.svg';
import lipids from '../icons/lipids.svg';
import proteins from '../icons/proteins.svg';
import { useEffect, useState } from 'react';
import '../style/components/Nutritional.css';

const Nutritional = (props) => {
  const { dataKey, label, value, unit } = props;

  const [icon, setIcon] = useState(null);

  useEffect(() => {
    switch (dataKey) {
      case 'calories':
        setIcon(calories);
        break;
      case 'carbohydrates':
        setIcon(carbohydrates);
        break;
      case 'lipids':
        setIcon(lipids);
        break;
      case 'proteins':
        setIcon(proteins);
        break;
      default:
        break;
    }
  }, [dataKey]);

  return (
    <div className="nutritional">
      <div className={`nutritional__thumbnail nutritional__thumbnail--${dataKey}`}>
        <img className="nutritional__thumbnail__icn" alt={`${dataKey} icon`} src={icon} />
      </div>
      <div className="nutritional__text">
        <p className="nutritional__text__value">{value}{unit}</p>
        <p className="nutritional__text__label">{label}</p>
      </div>
    </div>
  );
};

export default Nutritional;
