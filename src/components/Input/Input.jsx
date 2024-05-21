import { CustomInput } from './Input.styled';

function Input({ type, name, placeholder, onChange, location }) {
  return (
    <CustomInput
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      $location={location}
    />
  );
}

export default Input;
