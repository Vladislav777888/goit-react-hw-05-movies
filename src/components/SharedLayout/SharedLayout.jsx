import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Loader } from 'components/Loader';
import { Container, Header, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
