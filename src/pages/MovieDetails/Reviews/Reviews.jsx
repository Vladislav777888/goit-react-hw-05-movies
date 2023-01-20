import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { STATUS } from 'constants';
import { getMovieReviews } from 'services';

import { Loader } from 'components/Loader';
import { NotFound } from 'components/NotFound';
import MovieReviewsList from 'components/MovieReviewsList';
import { Box } from 'components/Box';

const Reviews = () => {
  const { movieId } = useParams();
  const [revies, setRevies] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setStatus(STATUS.loading);

      try {
        const { results } = await getMovieReviews(movieId);

        setRevies(
          results.map(({ author, content, id }) => {
            return { author, content, id };
          })
        );
        setStatus(STATUS.success);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {revies.length > 0 ? (
        <MovieReviewsList revies={revies}></MovieReviewsList>
      ) : (
        <Box p={4}>We don't have any reviews for this movie</Box>
      )}
      {status === STATUS.loading && <Loader />}
      {status === STATUS.error && <NotFound />}
    </>
  );
};

export default Reviews;
