import { CustomButton } from './Button.styled';

const Button = ({ type = 'button', load, children, ...otherProps }) => {
  return (
    <CustomButton type={type} $load={load} {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
