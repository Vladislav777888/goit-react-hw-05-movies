import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'services';
import { STATUS } from 'constants';
import { BASE_POSTER_URL, FAKE_ACTOR_PHOTO } from 'constants/baseUrl';

import { NotFound } from 'components/NotFound';
import { Loader } from 'components/Loader';
import CreditMoviesList from 'components/CreditMoviesList';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      setStatus(STATUS.loading);

      try {
        const { cast } = await getMovieCredits(movieId);

        if (cast.length === 0) {
          throw new Error('We have nothing for this search');
        }

        setCredits(
          cast.map(({ id, profile_path, name, character }) => {
            if (profile_path) {
              return {
                id,
                profile_path: BASE_POSTER_URL + profile_path,
                name,
                character,
              };
            } else {
              return {
                id,
                profile_path: FAKE_ACTOR_PHOTO,
                name,
                character,
              };
            }
          })
        );
        setStatus(STATUS.success);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <>
      {status === STATUS.success && (
        <CreditMoviesList credits={credits}></CreditMoviesList>
      )}
      {status === STATUS.error && <NotFound />}
      {(status === STATUS.loading || status === STATUS.idle) && <Loader />}
    </>
  );
};

export default Cast;
