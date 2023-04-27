import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const { Navigation, Container, NavItem } = require('./SharedLayout.styled');

const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <NavItem to={'/'}>Home</NavItem>
        <NavItem to={'/movie'}>Movie</NavItem>
      </Navigation>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
