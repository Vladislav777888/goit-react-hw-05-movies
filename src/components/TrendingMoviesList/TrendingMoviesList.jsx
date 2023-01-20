import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import {
  MovieList,
  MovieListItem,
  StyledLink,
} from './TrendingMoviesList.styled';

const TrendingMoviesList = ({ trending }) => {
  const location = useLocation();

  return (
    <MovieList>
      {trending.map(({ id, title }) => (
        <MovieListItem key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </MovieListItem>
      ))}
    </MovieList>
  );
};

TrendingMoviesList.propTypes = {
  trending: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TrendingMoviesList;
