import calories from '../icons/calories.svg';
import carbohydrates from '../icons/carbohydrates.svg';
import lipids from '../icons/lipids.svg';
import proteins from '../icons/proteins.svg';
import { useEffect, useState } from 'react';
import '../style/components/Nutritional.css';

const Nutritional = ({ data }) => {
  const [dataKey, setDataKey] = useState();
  const [label, setLabel] = useState();
  const [value, setValue] = useState();
  const [unit, setUnit] = useState();
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (data) {
      setDataKey(data.key);
      setLabel(data.data.label);
      setValue(data.data.value);
      setUnit(data.data.unit);
    }
  }, [data]);

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
        <p className="nutritional__text__value">
          {value}
          {unit}
        </p>
        <p className="nutritional__text__label">{label}</p>
      </div>
    </div>
  );
};

export default Nutritional;
