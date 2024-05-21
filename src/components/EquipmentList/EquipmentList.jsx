import { Item, List, StyledIcon } from './EquipmentList.styled';
import equipment from '../../data/equipmentData.json';
import { capitalizeFirstLetter, compareArraysAndObject } from 'helper/helper';

function EquipmentList({ data, short }) {
  const { adults: adultsValue, transmission, engine, details } = data;
  const comparedList = compareArraysAndObject(equipment, details);

  return (
    <List $short={short}>
      <Item key={'adults'}>
        <StyledIcon name={'adults'} />
        <p>{adultsValue} Adults</p>
      </Item>
      <Item key={'transmission'}>
        <StyledIcon name={'transmission'} color />
        <p>{capitalizeFirstLetter(transmission)}</p>
      </Item>
      <Item key={'petrol'}>
        <StyledIcon name={'petrol'} />
        <p>{capitalizeFirstLetter(engine)}</p>
      </Item>
      {comparedList.map(({ label, name, value }) => {
        const condition =
          name === 'airConditioner' || name === 'toilet' || name === 'gas'
            ? false
            : true;
        if (name === 'beds' || name === 'hob') {
          return (
            <Item key={name}>
              <StyledIcon name={name} color={condition} />
              <p>
                {value} {label}
              </p>
            </Item>
          );
        }

        return (
          <Item key={name}>
            <StyledIcon name={name} color={condition} />
            <p>{label}</p>
          </Item>
        );
      })}
    </List>
  );
}

export default EquipmentList;
