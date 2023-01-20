import PropTypes from 'prop-types';

import {
  Img,
  ActorsList,
  ActorName,
  Character,
} from './CreditMoviesList.styled';

const CreditMoviesList = ({ credits }) => {
  return (
    <ActorsList>
      {credits.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <Img src={profile_path} alt={name} />
          <ActorName>{name}</ActorName>
          <Character>Character: {character}</Character>
        </li>
      ))}
    </ActorsList>
  );
};

CreditMoviesList.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default CreditMoviesList;
