import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { Img, Text, Title, Genre } from './InnerMovieDetails.styled';

const InnerMovieDetails = ({ movie }) => {
  const {
    original_title,
    vote_average,
    overview,
    poster_path,
    release_date,
    genres,
  } = movie;

  return (
    <Box display="flex" px={4} borderBottom="normal" pb={3}>
      <Img src={poster_path} alt={original_title} />
      <Box p={4}>
        <h2>
          {original_title} <span>({release_date.split('-')[0]})</span>
        </h2>
        <Text>User Score: {Math.round(vote_average * 10)}%</Text>
        <Title>Overview</Title>
        <Text>{overview}</Text>
        <Title>Genres</Title>
        {genres.length > 0
          ? genres.map(({ id, name }) => <Genre key={id}>{name}</Genre>)
          : 'genre unknown'}
      </Box>
    </Box>
  );
};

InnerMovieDetails.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default InnerMovieDetails;
