import Logo from 'components/Logo/Logo';
import { Link, LinksContainer, Navigation } from './Header.styled';

const Header = () => {
  return (
    <Navigation>
      <Logo />
      <LinksContainer>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorite</Link>
      </LinksContainer>
    </Navigation>
  );
};

export default Header;
