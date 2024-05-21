import { SvgIcon } from './Icon.styled';
import sprite from '../../assets/images/sprite.svg';

const Icon = ({ name, className }) => (
  <SvgIcon className={className}>
    <use xlinkHref={`${sprite}#icon-${name}`} />
  </SvgIcon>
);

export default Icon;
