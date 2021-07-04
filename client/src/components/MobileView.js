import { useState } from 'react';
import styled from 'styled-components/macro';
import { useSpring, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { NavLink } from 'react-router-dom/';
import logoIcon from '../assets/images/logoIcon.svg';
import cancelIcon from '../assets/images/cancel.svg';
import homeIcon from '../assets/images/homeGray.svg';
import homeActiveIcon from '../assets/images/homePrimary.svg';
import favoritesIcon from '../assets/images/favoriteGray.svg';
import favoritesActiveIcon from '../assets/images/favoritesPrimary.svg';
import searchIcon from '../assets/images/searchGray.svg';

export default function MobileView({ isStatic }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <NavWrapper isStatic={isStatic}>
      <NavButton
        isOpen={isOpen}
        onClick={open}
        onMouseDown={() => setIsOpen(true)}>
        <img src={logoIcon} alt='Logo Icon of Pawzies' />
      </NavButton>
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
        <div
          onClick={() => {
            close();
            setIsOpen(false);
          }}>
          <Icon src={cancelIcon} alt='Cancel Icon' />
        </div>
      </animated.div>
    </NavWrapper>
  );
}

const NavWrapper = styled.section`
  background-color: ivory;

  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  bottom: ${(props) => (props.isStatic ? 'auto' : '0')};
  margin: ${(props) => (props.isStatic ? 'auto' : '')};
  width: ${(props) => (props.isStatic ? '414px' : '100vw')};

  .sheet {
    background: rgba(38, 51, 90, 93%);
    height: 4.25rem;
    position: fixed;
    touch-action: none;
    width: 100vw;
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

const NavButton = styled.button`
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
  opacity: ${(props) => (props.isOpen ? '0' : '100%')};
  transform: translate(-50%, -50%);
  width: 4rem;
  z-index: 100;
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
  opacity: 25%;

  .active & {
    background-image: url(${homeActiveIcon});
    opacity: 100%;
  }
`;

const FavoritesIconStyled = styled.div`
  background: center / contain no-repeat url(${favoritesIcon});
  width: 3.75rem;
  opacity: 25%;

  .active & {
    background-image: url(${favoritesActiveIcon});
    opacity: 100%;
  }
`;

const SearchIconStyled = styled.div`
  background: center / contain no-repeat url(${searchIcon});
  width: 3.75rem;
  opacity: 25%;
`;

const Icon = styled.img`
  width: 5rem;
`;
