import { useEffect, useState } from 'react';

import { STATUS } from 'constants';
import { getTrendingMovies } from 'services';

import { Box } from 'components/Box';
import { NotFound } from 'components/NotFound';
import { Loader } from 'components/Loader';

import TrendingMoviesList from 'components/TrendingMoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    const fetchTrending = async () => {
      setStatus(STATUS.loading);

      try {
        const { results } = await getTrendingMovies();

        if (results.length === 0) {
          throw new Error('We have nothing for this search');
        }

        setMovies(
          results.map(({ id, title }) => {
            return { id, title };
          })
        );
        setStatus(STATUS.success);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <>
      {status === STATUS.success && (
        <Box p={4}>
          <h1>Tranding Today</h1>
          <TrendingMoviesList trending={movies} />
        </Box>
      )}

      {status === STATUS.error && <NotFound />}

      {(status === STATUS.loading || status === STATUS.idle) && <Loader />}
    </>
  );
};

export default Home;
