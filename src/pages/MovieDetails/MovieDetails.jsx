import { useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetails } from 'services';
import { STATUS } from 'constants';
import { BASE_POSTER_URL, FAKE_POSTER } from 'constants/baseUrl';

import { NotFound } from 'components/NotFound';
import { Loader } from 'components/Loader';
import { BackLink } from 'components/BackLink';
import InnerMovieDetails from 'components/InnerMovieDetails';
import AdditionalInfo from 'components/AdditionalInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setStatus(STATUS.loading);

      try {
        const data = await getMovieDetails(movieId);

        if (data.length === 0) {
          throw new Error('We have nothing for this search');
        }

        if (!data.poster_path) {
          data.poster_path = FAKE_POSTER;
        } else {
          data.poster_path = BASE_POSTER_URL + data.poster_path;
        }

        if (!data.title) {
          data.title = 'no name';
        }

        if (!data.release_date) {
          data.release_date = '';
        }

        setMovie({
          original_title: data.original_title,
          vote_average: data.vote_average,
          overview: data.overview,
          poster_path: data.poster_path,
          release_date: data.release_date,
          genres: data.genres,
        });
        setStatus(STATUS.success);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {status === STATUS.success && (
        <>
          <BackLink to={backLinkHref}>Go back</BackLink>
          <InnerMovieDetails movie={movie} />
          <AdditionalInfo state={{ from: location.state?.from }} />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
      {status === STATUS.error && <NotFound />}
      {(status === STATUS.loading || status === STATUS.idle) && <Loader />}
    </>
  );
};

export default MovieDetails;
