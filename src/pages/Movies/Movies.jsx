import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Box } from 'components/Box';
import { Loader } from 'components/Loader';
import { NotFound } from 'components/NotFound';
import SearchBar from 'components/SearchBar';
import SearchMoviesList from 'components/SearchMoviesList';

import { STATUS } from 'constants';
import { getSearchMovies } from 'services';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState(STATUS.idle);
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchSearchMovies = async () => {
      setStatus(STATUS.loading);

      try {
        const { results } = await getSearchMovies({ query });

        if (results.length === 0) {
          toast.error('You entered the wrong movie title');
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

    fetchSearchMovies();
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={updateQueryString} />
      {movies.length > 0 && status === STATUS.success && (
        <Box p={4}>
          <SearchMoviesList movies={movies} />
        </Box>
      )}

      {status === STATUS.error && <NotFound />}

      {status === STATUS.loading && <Loader />}
    </>
  );
};

export default Movies;
