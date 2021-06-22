import { NavLink } from 'react-router-dom/';
import styled from 'styled-components/macro';
import { useSpring, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import logoIcon from '../assets/icons/LogoIcon.svg';
import homeIcon from '../assets/icons/homeEmpty.svg';
import homeActiveIcon from '../assets/icons/homeFilled.svg';
import favoritesIcon from '../assets/icons/favoritesEmpty.svg';
import favoritesActiveIcon from '../assets/icons/favoritesFilled.svg';
import searchIcon from '../assets/icons/searchEmpty.svg';
import searchActiveIcon from '../assets/icons/searchFilled.svg';
import cancelIcon from '../assets/icons/Cancel.svg';

export default function Navigation() {
  const height = 4 * 60 + 80;

  const [{ y }, set] = useSpring(() => ({ y: height }));

  const open = ({ canceled }) => {
    set.start({
      y: 0,
      immediate: false,
      config: canceled ? config.wobbly : config.stiff,
    });
  };
  const close = (velocity = 0) => {
    set.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },
    });
  };

  const bind = useDrag(
    ({ last, vxvy: [, vy], movement: [, my], cancel, canceled }) => {
      if (my < -30) cancel();
      if (last) {
        my > height * 0.5 || vy > 0.5 ? close(vy) : open({ canceled });
      } else set.start({ y: my, immediate: true });
    },
    {
      initial: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  const display = y.to((py) => (py < height ? 'flex' : 'none'));

  return (
    <NavWrapper>
      <button className='action-btn' onClick={open}>
        <img src={logoIcon} alt='Logo Icon of Pawzies' />
      </button>
      <animated.div
        className='sheet'
        {...bind()}
        style={{ display, bottom: `calc(-90vh + 600px)`, y }}>
        <StyledNavLink className='link' to='/main'>
          <HomeIconStyled title='Main' role='img' />
        </StyledNavLink>
        <StyledNavLink className='link' to='/favorites'>
          <FavoritesIconStyled title='Favorites' role='img' />
        </StyledNavLink>
        <StyledNavLink className='link' to='/search'>
          <SearchIconStyled title='Search' role='img' />
        </StyledNavLink>
        <div onClick={() => close()}>
          <Icon src={cancelIcon} alt='Cancel Icon' />
        </div>
      </animated.div>
    </NavWrapper>
  );
}

const NavWrapper = styled.section`
  background-color: ivory;

  .action-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--white);
    border: 1px solid var(--gray);
    border-radius: 50%;
    bottom: -4%;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0);
    filter: drop-shadow(0 0 0.1rem black);
    height: 4rem;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    width: 4rem;
    z-index: 100;
  }

  .sheet {
    background: var(--gray-dark);
    border-radius: 12px 12px 0px;
    height: calc(13vh + 10px);
    left: 2vw;
    position: fixed;
    touch-action: none;
    width: 96vw;
    z-index: 100;
  }

  .sheet > .link,
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3.75rem;
    padding: 0 1rem;
    text-transform: capitalize;
    text-decoration: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--primary);
  width: 90vw;
`;

const HomeIconStyled = styled.div`
  background: center / contain no-repeat url(${homeIcon});
  width: 3.75rem;

  .active & {
    background-image: url(${homeActiveIcon});
  }
`;

const FavoritesIconStyled = styled.div`
  background: center / contain no-repeat url(${favoritesIcon});
  width: 3.75rem;

  .active & {
    background-image: url(${favoritesActiveIcon});
  }
`;

const SearchIconStyled = styled.div`
  background: center / contain no-repeat url(${searchIcon});
  width: 3.75rem;

  .active & {
    background-image: url(${searchActiveIcon});
  }
`;

const Icon = styled.img`
  width: 5rem;
`;
