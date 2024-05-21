import EquipmentList from 'components/EquipmentList/EquipmentList';
import { Item, List, Title } from './Features.styled';
import vehicleForm from '../../data/vehicleForm.json';
import vehicleDetails from '../../data/vehicleDetails.json';
import { prepareName } from 'helper/helper';

const Features = ({ data }) => {
  const { form } = data;
  const correctName = prepareName(vehicleForm, form);

  return (
    <>
      <EquipmentList data={data} />
      <Title>Vehicle details</Title>
      <List>
        <Item key={correctName}>
          <p>Form</p>
          <p>{correctName}</p>
        </Item>
        {vehicleDetails.map(item => {
          const { name, label } = item;

          return (
            <Item key={name}>
              <p>{label}</p>
              <p>{data[name]}</p>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default Features;
