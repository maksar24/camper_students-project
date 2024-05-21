import Input from 'components/Input/Input';
import {
  Form,
  GroupTitle,
  IconStyled,
  InputWrapper,
  List,
  MainWrapper,
  SubgroupTitle,
} from './SortingForm.styled';
import FiltersList from 'components/FiltersList/FiltersList';
import equipmentData from '../../data/vehicleEquipment.json';
import typeData from '../../data/vehicleType.json';
import { useDispatch, useSelector } from 'react-redux';
import { selectVehicles } from '../../redux/selectors';
import { useEffect, useState } from 'react';
import { filterVehicles } from '../../redux/vehicles/vehiclesSlice';
import { filterEquipment, filterLocation, filterType } from 'helper/helper';

function SortingForm() {
  const [locationFilter, setLocationFilter] = useState('');
  const [equipmentFilter, setEquipmentFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState(null);

  const dispatch = useDispatch();
  const vehiclesList = useSelector(selectVehicles);

  const updateLocationValue = value => {
    setLocationFilter(value);
  };

  const handleTypeChange = name => {
    setTypeFilter(prev => {
      if (prev === name) {
        return null;
      } else {
        return name;
      }
    });
  };

  const handleEquipmentChange = name => {
    setEquipmentFilter(prev => {
      if (prev.includes(name)) {
        return prev.filter(el => el !== name);
      } else {
        return [...prev, name];
      }
    });
  };

  useEffect(() => {
    const getVisibleCampers = () => {
      let filteredVehicles = vehiclesList;

      filteredVehicles = filterLocation(filteredVehicles, locationFilter);
      filteredVehicles = filterEquipment(filteredVehicles, equipmentFilter);
      filteredVehicles = filterType(filteredVehicles, typeFilter);

      return filteredVehicles;
    };

    dispatch(filterVehicles(getVisibleCampers()));
  }, [locationFilter, dispatch, vehiclesList, equipmentFilter, typeFilter]);

  return (
    <Form>
      <MainWrapper>
        <GroupTitle $primary>Location</GroupTitle>
        <InputWrapper>
          <Input
            placeholder="City"
            onChange={({ target }) => updateLocationValue(target.value)}
            location
          />
          <IconStyled name="map-pin" />
        </InputWrapper>
      </MainWrapper>
      <GroupTitle>Filters</GroupTitle>
      <MainWrapper>
        <SubgroupTitle>Vehicle equipment</SubgroupTitle>
        <List>
          {equipmentData.map(({ name, label, specialStyle }) => {
            return (
              <FiltersList
                key={name}
                name={name}
                label={label}
                specialStyle={specialStyle}
                checked={equipmentFilter.includes(name)}
                handleClick={() => handleEquipmentChange(name)}
              />
            );
          })}
        </List>
      </MainWrapper>
      <MainWrapper>
        <SubgroupTitle>Vehicle type</SubgroupTitle>
        <List>
          {typeData.map(({ name, label, specialStyle }) => {
            return (
              <FiltersList
                key={name}
                name={name}
                label={label}
                specialStyle={specialStyle}
                checked={typeFilter === name}
                handleClick={() => handleTypeChange(name)}
              />
            );
          })}
        </List>
      </MainWrapper>
    </Form>
  );
}

export default SortingForm;
