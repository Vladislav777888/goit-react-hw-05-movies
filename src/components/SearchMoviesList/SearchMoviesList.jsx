import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  MovieList,
  MovieListItem,
  StyledLink,
} from './SearchMoviesList.styled';

const SearchMoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(({ id, title }) => (
        <MovieListItem key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </MovieListItem>
      ))}
    </MovieList>
  );
};

SearchMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default SearchMoviesList;
