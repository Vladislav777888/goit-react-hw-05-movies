import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { InfoList, InfoListItem, StyledLink } from './AdditionalInfo.styled';

const AdditionalInfo = ({ state }) => {
  return (
    <Box p={4} borderBottom="normal">
      <p>Additional information</p>
      <InfoList>
        <InfoListItem>
          <StyledLink to="cast" state={state}>
            Cast
          </StyledLink>
        </InfoListItem>
        <InfoListItem>
          <StyledLink to="reviews" state={state}>
            Reviews
          </StyledLink>
        </InfoListItem>
      </InfoList>
    </Box>
  );
};

AdditionalInfo.propTypes = {
  state: PropTypes.shape({
    from: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default AdditionalInfo;
