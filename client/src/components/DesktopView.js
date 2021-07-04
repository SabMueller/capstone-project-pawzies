import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom/';
import { ReactComponent as homeIcon } from '../assets/images/homeGray.svg';
import { ReactComponent as homeActiveIcon } from '../assets/images/homePrimary.svg';
import { ReactComponent as favoritesIcon } from '../assets/images/favoriteGray.svg';
import { ReactComponent as favoritesActiveIcon } from '../assets/images/favoritesPrimary.svg';
import { ReactComponent as searchIcon } from '../assets/images/searchGray.svg';

export default function DesktopView() {
  return (
    <NavWrapper>
      <StyledNavLink className='link' to='/main'>
        <HomeIconStyled title='Main' role='img' />
      </StyledNavLink>
      <StyledNavLink className='link' to='/favorites'>
        <FavoritesIconStyled title='Favorites' role='img' />
      </StyledNavLink>
      <StyledNavLink className='link' to='/search'>
        <SearchIconStyled title='Search' role='img' />
      </StyledNavLink>
    </NavWrapper>
  );
}

const NavWrapper = styled.section`
  background-color: var(--blue-dark);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  bottom: 0%;
  margin: 0 auto;
  height: 5rem;
  position: fixed;
  z-index: 500;
  width: 100%;
  border-top: 1px solid var(--primary-darkest);
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 5rem;
`;

const HomeIconStyled = styled(homeIcon)`
  background: center / contain no-repeat url(${homeIcon});
  width: 3.75rem;
  opacity: 25%;

  .active & {
    background: center / contain no-repeat url(${homeActiveIcon});
    opacity: 100%;
  }
`;

const FavoritesIconStyled = styled(favoritesIcon)`
  background: center / contain no-repeat url(${favoritesIcon});
  width: 3.75rem;
  opacity: 25%;

  .active & {
    background: center / contain no-repeat url(${favoritesActiveIcon});
    opacity: 100%;
  }
`;

const SearchIconStyled = styled(searchIcon)`
  background: center / contain no-repeat url(${searchIcon});
  width: 3.75rem;
  opacity: 25%;
`;
