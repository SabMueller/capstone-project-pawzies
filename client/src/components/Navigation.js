import { NavLink } from 'react-router-dom/';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavWrapper>
      <NavLink to='/main'>Main</NavLink>
    </NavWrapper>
  );
}

const NavWrapper = styled.section`
  background-color: ivory;
`;
