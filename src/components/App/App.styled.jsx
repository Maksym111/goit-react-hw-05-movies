import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  padding: 0 30px;
`;

const Navigation = styled.nav`
  display: flex;
  padding: 20px;

  gap: 30px;
  background-color: #fffbdb;
  box-shadow: 0px 6px 8px -6px rgba(0, 0, 0, 0.75);
`;

const NavItem = styled(NavLink)`
  margin: 0;
  padding: 0;

  color: #991d1d;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

export { Container, Navigation, NavItem };
