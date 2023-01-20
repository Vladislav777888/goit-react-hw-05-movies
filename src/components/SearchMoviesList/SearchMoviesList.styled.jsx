import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: disc;
  margin-top: 20px;
  gap: 5px;
`;

export const MovieListItem = styled.li`
  margin-left: 16px;
`;

export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.blue};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${p => p.theme.colors.yellow};
  }
`;
