import { HiddenInput, Item, StyledIcon, Title } from './FiltersList.styled';

function FiltersList({ name, label, specialStyle, checked, handleClick }) {
  return (
    <Item key={name} checked={checked} onClick={handleClick}>
      <HiddenInput defaultChecked={checked} />
      <StyledIcon name={name} specialStyle={specialStyle} />
      <Title>{label}</Title>
    </Item>
  );
}

export default FiltersList;
