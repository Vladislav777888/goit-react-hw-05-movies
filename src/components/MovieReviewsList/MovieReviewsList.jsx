import PropTypes from 'prop-types';
import { ReviewsList, Text } from './MovieReviewsList.styled';

const MovieReviewsList = ({ revies }) => {
  return (
    <ReviewsList>
      {revies.map(({ author, content, id }) => (
        <li key={id}>
          <h3>Authot: {author}</h3>
          <Text>{content}</Text>
        </li>
      ))}
    </ReviewsList>
  );
};

MovieReviewsList.propTypes = {
  revies: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MovieReviewsList;
