import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  /* padding: 0 16px; */
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 16px;
  box-shadow: 0px 3px 3px rgb(0 0 0 / 12%), 0px 3px 1px rgb(0 0 0 / 14%),
    0px 1px 1px rgb(0 0 0 / 20%);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
